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
  },
  "click #report-js"(event, instance) {
    console.log("updating current user..");
    let currentUser=Profiles.findOne({owner:Meteor.userId()});
    currentUser.reportedUsers.push(this.user._id);
    currentUser.friends.splice(currentUser.friends.indexOf(this.user._id), 1);
    Profiles.update(currentUser._id,currentUser);
    console.log("updating reported user..");
    let reportedUser=Profiles.findOne(this.user._id);
    reportedUser.reports += 1;
    reportedUser.friends.splice(reportedUser.friends.indexOf(currentUser._id), 1);
    Profiles.update(reportedUser._id,reportedUser);
  }
})

Template.userDisplay.helpers({
  canFriend() {
    let prof=Profiles.findOne({owner:Meteor.userId()});
    if (!prof)
      return false;
    console.log("can friend="+prof.friends.indexOf(this.user._id) == -1 && this.user.owner != Meteor.userId() && prof.reportedUsers.indexOf(this.user._id) == -1 && this.user.reportedUsers.indexOf(prof._id) == -1);
    return prof.friends.indexOf(this.user._id) == -1 && this.user.owner != Meteor.userId() && prof.reportedUsers.indexOf(this.user._id) == -1 && this.user.reportedUsers.indexOf(prof._id) == -1;
  },
  canUnFriend() {
    let prof=Profiles.findOne({owner:Meteor.userId()});
    if (!prof)
      return false;
    console.log("can unfriend="+prof.friends.indexOf(this.user._id) > -1);
    return prof.friends.indexOf(this.user._id) > -1;
  },
  canReport() {
    let prof=Profiles.findOne({owner:Meteor.userId()});
    if (!prof)
      return false;
    console.log("can report="+prof.reportedUsers.indexOf(this.user._id)==-1 && this.user.owner != Meteor.userId());
    return prof.reportedUsers.indexOf(this.user._id) == -1 && this.user.owner != Meteor.userId();
  },
  reported() {
    let prof = Profiles.findOne({owner:Meteor.userId()});
    if (!prof)
      return false;
    return Meteor.userId() != this.user._id && prof.reportedUsers.indexOf(this.user._id) >= 0;
  }
})
