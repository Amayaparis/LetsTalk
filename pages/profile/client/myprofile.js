const RECENT_CLICKED_ID = "recentClicked";
const NAME_EMPTY_ID = "nameEmpty";
const NAME_EXISTS_ID = "nameExists";
Session.set(RECENT_CLICKED_ID,"Chats");
Session.set(NAME_EMPTY_ID,false);
Session.set(NAME_EXISTS_ID,false);

Template.profilepage.helpers({
  getProfile(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile) {
      theProfile = {name:"",dob:"",bio:"",followers:[],following:[],points:0,owner:Meteor.userId()};
      var k = Profiles.find().count();
      while (Profiles.findOne({name:"Anonymous"+k})) {
        k++;
      }
      theProfile.name = "Anonymous"+k;
      Profiles.insert(theProfile);
      console.log("empty ran correctly");
    }
    else {
      console.log("found a matching profile");
      return theProfile;
    }
   }
})

Template.myprofile.events({
  "click #update-js"(event,instance) {
    const name = instance.$('#name-js').val();
    console.log('read name='+name)
    const dob = instance.$('#dob-js').val();
    console.log('read dob='+dob);
    const bio = instance.$('#bio-js').val();
    console.log('read bio='+bio);
    if (name == "") {
      Session.set(NAME_EMPTY_ID,true);
    }
    else if (Profiles.findOne({name:name}) != undefined) {
      Session.set(NAME_EXISTS_ID,true);
    }
    else {
      Session.set(NAME_EMPTY_ID,false);
      Session.set(NAME_EXISTS_ID,false);
      let prof = Profiles.findOne(this.me._id);
      this.me.name = name;
      this.me.dob = dob;
      this.me.bio = bio;
      this.me.followers = prof.followers;
      this.me.following = prof.following;
      this.me.points = prof.points;
      Profiles.update(this.me._id,this.me);
    }
  },
  "click #reset-js"(event,instance) {
    document.location.reload();
  },
  "change #chats-js"(event,instance) {
    Session.set(RECENT_CLICKED_ID,"Chats");
    console.log("updated recent to="+Session.get(RECENT_CLICKED_ID));
  },
  "change #posts-js"(event,instance) {
    Session.set(RECENT_CLICKED_ID,"Posts");
    console.log("updated recent to="+Session.get(RECENT_CLICKED_ID));
  },
  "change #polls-js"(event,instance) {
    Session.set(RECENT_CLICKED_ID,"Polls");
    console.log("updated recent to="+Session.get(RECENT_CLICKED_ID));
  },
  "change #pics-js"(event,instance) {
    Session.set(RECENT_CLICKED_ID,"Pictures");
    console.log("updated recent to="+Session.get(RECENT_CLICKED_ID));
  }
})

Template.myprofile.helpers({
  getClickedRecent() {
    console.log("recent="+Session.get(RECENT_CLICKED_ID));
    return Session.get(RECENT_CLICKED_ID);
  },
  getNameEmptyState() {
    console.log("is name empty="+Session.get(NAME_EMPTY_ID));
    return Session.get(NAME_EMPTY_ID);
  },
  getNameExistsState() {
    console.log("name exists="+Session.get(NAME_EXISTS_ID));
    return Session.get(NAME_EXISTS_ID);
  },
  isChatsClicked() {
    return Session.get(RECENT_CLICKED_ID) == "Chats";
  },
  isPostsClicked() {
    console.log("posts clicked");
    return Session.get(RECENT_CLICKED_ID)  == "Posts";
  },
  isPicsClicked() {
    return Session.get(RECENT_CLICKED_ID)  == "Pictures";
  },
  isPollsClicked() {
    return Session.get(RECENT_CLICKED_ID)  == "Polls";
  },
  getRecentCollection() {
    var recents = [];
    if (Session.get(RECENT_CLICKED_ID) == "Chats") {
      Chats.find().forEach((chat) => {
        if (chat.createdBy==Meteor.userId()) {
          recents.push(chat);
        }
      });
    }
    else if (Session.get(RECENT_CLICKED_ID) == "Posts" || Session.get(RECENT_CLICKED_ID) == "Pictures") {
      Posts.find().forEach((post) => {
        if (post.createdBy==Meteor.userId()) {
          recents.push(post);
        }
      });
    }
    else if (Session.get(RECENT_CLICKED_ID) == "Polls") {
      Polls.find().forEach((poll) => {
        if (poll.createdBy==Meteor.userId()) {
          recents.push(poll);
        }
      });
    }
    return recents;
  }
})
