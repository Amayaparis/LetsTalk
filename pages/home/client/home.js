const VOTE_POLL_POINTS = 1;
const APP_ACTIVITY_CLICKED_ID = "appActivity";
Session.set(APP_ACTIVITY_CLICKED_ID,"Posts");

Template.home.helpers({
  posts(){
    return Posts.find({},{sort:{createdAt:-1}});
  },
  noPosts() {
    return Posts.find().count() == 0;
  },
  polls() {
    return Polls.find({},{sort:{createdAt:-1}});
  },
  noPolls() {
    return Polls.find().count() == 0;
  },
  isPostsClicked() {
    console.log("is posts="+Session.get(APP_ACTIVITY_CLICKED_ID));
    return Session.get(APP_ACTIVITY_CLICKED_ID) == "Posts";
  },
  isPollsClicked() {
    console.log("is polls="+Session.get(APP_ACTIVITY_CLICKED_ID));
    return Session.get(APP_ACTIVITY_CLICKED_ID) == "Polls";
  },
  isRoomsClicked() {
    console.log("is rooms="+Session.get(APP_ACTIVITY_CLICKED_ID));
    return Session.get(APP_ACTIVITY_CLICKED_ID) == "Chats";
  }
})

Template.home.events({
  "change #chats-js"(event,instance) {
    Session.set(APP_ACTIVITY_CLICKED_ID,"Chats");
    console.log("updated app activity to="+Session.get(APP_ACTIVITY_CLICKED_ID));
  },
  "change #posts-js"(event,instance) {
    Session.set(APP_ACTIVITY_CLICKED_ID,"Posts");
    console.log("updated app activity to="+Session.get(APP_ACTIVITY_CLICKED_ID));
  },
  "change #polls-js"(event,instance) {
    Session.set(APP_ACTIVITY_CLICKED_ID,"Polls");
    console.log("updated app activity to="+Session.get(APP_ACTIVITY_CLICKED_ID));
  },
})

Template.showpost.helpers({
  canDeletePost() {
    console.log(this.post.createdBy);
    return Meteor.userId() == this.post.createdBy;
  }
})

Template.showpoll.helpers({
  canDeletePoll() {
    console.log(this.poll.createdBy);
    return Meteor.userId() == this.poll.createdBy;
  },
  canVote() {
    let userHasVoted = this.poll.votersNo.indexOf(Meteor.userId()) > -1 || this.poll.votersYes.indexOf(Meteor.userId()) > -1;
    console.log("user in no voters="+this.poll.votersNo.indexOf(Meteor.userId()) > -1);
    console.log("user in yes voters="+this.poll.votersYes.indexOf(Meteor.userId()) > -1);
    console.log("user has voted="+userHasVoted);
    console.log(`poll data=${JSON.stringify(this.poll)}`);
    let currTime = new Date();
    console.log(this.poll.endTime);
    let isPollOpen = true;
    let userNotCreator = this.poll.createdBy != Meteor.userId();
    return isPollOpen && !userHasVoted && userNotCreator;
  }
})

Template.showpost.events({
  "click #delpost-js"(event,instance){
    console.dir(this)
    Posts.remove(this.post._id)
  }
})

Template.showpoll.events({
  "click #delpoll-js"(event,instance) {
    console.log("removing.."+this.poll._id);
    Polls.remove(this.poll._id);
  },
  "click #pollvoteno-js"(event,instance) {
    console.log("adding "+Meteor.userId()+" to no voters");
    let poll = Polls.findOne(this.poll._id);
    this.poll.title = poll.title;
    this.poll.desc = poll.desc;
    this.poll.topic = poll.topic;
    this.poll.endTime = poll.endTime;
    this.poll.link = poll.link;
    this.poll.createdAt = poll.createdAt;
    this.poll.votersYes = poll.votersYes;
    this.poll.createdBy = poll.createdBy;
    this.poll.votersNo.push(Meteor.userId());
    Polls.update(this.poll._id,this.poll);
    let prof = Profiles.findOne({owner:Meteor.userId()});
    prof.points += VOTE_POLL_POINTS;
    Profiles.update(prof._id,prof);
  },
  "click #pollvoteyes-js"(event,instance) {
    console.log("adding "+Meteor.userId()+" to yes voters");
    let poll = Polls.findOne(this.poll._id);
    this.poll.title = poll.title;
    this.poll.desc = poll.desc;
    this.poll.topic = poll.topic;
    this.poll.endTime = poll.endTime;
    this.poll.link = poll.link;
    this.poll.createdAt = poll.createdAt;
    this.poll.votersNo = poll.votersNo;
    this.poll.createdBy = poll.createdBy;
    this.poll.votersYes.push(Meteor.userId());
    Polls.update(this.poll._id,this.poll);
    let prof = Profiles.findOne({owner:Meteor.userId()});
    prof.points += VOTE_POLL_POINTS;
    Profiles.update(prof._id,prof);
  }
})
