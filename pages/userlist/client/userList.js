Template.userList.helpers({
  users() {
    return Profiles.find().fetch();
  }
});

Template.userList.events({
  "click #friend-js"(event, instance) {
    console.log("updating current user..");
    let currentUser=Profiles.findOne({owner:Meteor.userId()});
    currentUser.friends.push(this.user._id);
    Profiles.update(currentUser._id,currentUser);
    console.log("updating new friend..");
    let newFriend=Profiles.findOne(this.user._id);
    newFriend.friends.push(currentUser._id);
    Profiles.update(newFriend._id,newFriend);
  },
  "click #unfriend-js"(event, instance) {
    console.log("updating current user..");
    let currentUser=Profiles.findOne({owner:Meteor.userId()});
    currentUser.friends.splice(currentUser.friends.indexOf(this.user._id), 1);
    Profiles.update(currentUser._id,currentUser);
    console.log("updating former friend..");
    let formerFriend=Profiles.findOne(this.user._id);
    formerFriend.friends.splice(formerFriend.friends.indexOf(currentUser._id), 1);
    Profiles.update(formerFriend._id,formerFriend);
  }
})

Template.userDisplay.helpers({
  canFriend() {
    if (!Meteor.userId())
      return false;
    let prof=Profiles.findOne({owner:Meteor.userId()});
    console.log("can friend="+prof.friends.indexOf(this.user._id) == -1 && this.user.owner != Meteor.userId());
    return prof.friends.indexOf(this.user._id) == -1 && this.user.owner != Meteor.userId();
  },
  canUnFriend() {
    if (!Meteor.userId())
      return false;
    let prof=Profiles.findOne({owner:Meteor.userId()});
    console.log("can unfriend="+prof.friends.indexOf(this.user._id) > -1);
    return prof.friends.indexOf(this.user._id) > -1;
  }
})
