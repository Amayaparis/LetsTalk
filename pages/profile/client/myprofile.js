Session.set("recentClicked","Chats");

function makeDefaultProfile() {
    var k = Profiles.find().count();
    while (Profiles.findOne({name:"Anonymous"+k})) {
      k++;
    }
    return {name:"Anonymous"+k,dob:"",bio:"",followers:[],following:[],points:0,owner:Meteor.userId()};
}

function removeAllProfiles() {
  console.log("removing all profiles..");
  Profiles.find().forEach((profile) => {
    Profiles.remove(profile._id);
  });
  console.log("done");
}

Template.profilepage.helpers({
  getProfile(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile) {
      Profiles.insert(makeDefaultProfile());
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
      alert("Some of the fields have not been completed!");
    }
    else {
      this.me.name = name;
      this.me.dob = dob;
      this.me.bio = bio;
      Profiles.update(this.me._id,this.me);
    }
  },
  "click #reset-js"(event,instance) {
    document.location.reload();
  },
  "change #chats-js"(event,instance) {
    Session.set("recentClicked","Chats");
    console.log("updated recent to="+Session.get("recentClicked"));
  },
  "change #posts-js"(event,instance) {
    Session.set("recentClicked","Posts");
    console.log("updated recent to="+Session.get("recentClicked"));
  },
  "change #polls-js"(event,instance) {
    Session.set("recentClicked","Polls");
    console.log("updated recent to="+Session.get("recentClicked"));
  },
  "change #pics-js"(event,instance) {
    Session.set("recentClicked","Pictures");
    console.log("updated recent to="+Session.get("recentClicked"));
  },
  "change"(event,instance) {
    console.log("detected change..");
    instance.$("#recentlbl-js").val(Session.get("recentClicked"));
    console.log("updated recent..");
  }
})

Template.myprofile.helpers({
  getClickedRecent() {
    console.log("recent="+Session.get("recentClicked"));
    return Session.get("recentClicked");
  },
  getRecentCollection() {
    var recents = [];
    if (Session.get("recentClicked") == "Chats") {
      Chats.find().forEach((chat) => {
        if (chat.createdBy==Meteor.userId()) {
          recents.push(chat);
        }
      });
    }
    else if (Session.get("recentClicked") == "Posts") {
      Posts.find().forEach((post) => {
        if (post.owner==Meteor.userId()) {
          recents.push(post);
        }
      });
    }
    else if (Session.get("recentClicked") == "Pictures") {
      Pictures.find().forEach((pic) => {
        if (pic.owner==Meteor.userId()) {
          recents.push(pic);
        }
      });
    }
    else if (Session.get("recentClicked") == "Polls") {
      Polls.find().forEach((poll) => {
        if (polls.owner==Meteor.userId()) {
          recents.push(poll);
        }
      });
    }
    return recents;
  }
})
