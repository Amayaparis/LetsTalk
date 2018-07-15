const APP_ACTIVITY_CLICKED_ID = "appActivity";
Session.set(APP_ACTIVITY_CLICKED_ID,"Posts");


Template.home.helpers({
  posts(){
    return Posts.find({},{sort:{createdAt:-1}})
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
  canDelete() {
    console.log(this.post.createdBy);
    return Meteor.userId() == this.post.createdBy;
  }
})

Template.showpost.events({
  "click .delete"(event,instance){
    console.dir(this)
    Posts.remove(this.post._id)
  }
})
