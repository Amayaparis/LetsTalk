Session.set("recentClicked","Chats");

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
      alert("Please enter a name!");
    }
    else {
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
  }
})

Template.myprofile.helpers({
  getClickedRecent() {
    console.log("recent="+Session.get("recentClicked"));
    return Session.get("recentClicked");
  },
  isChatsClicked() {
    return Session.get("recentClicked") == "Chats";
  },
  isPostsClicked() {
    return Session.get("recentClicked")  == "Posts";
  },
  isPicsClicked() {
    return Session.get("recentClicked")  == "Pictures";
  },
  isPollsClicked() {
    return Session.get("recentClicked")  == "Polls";
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
        if (post.createdBy==Meteor.userId()) {
          recents.push(post);
        }
      });
    }
    else if (Session.get("recentClicked") == "Pictures") {
      Pictures.find().forEach((pic) => {
        if (pic.createdBy==Meteor.userId()) {
          recents.push(pic);
        }
      });
    }
    else if (Session.get("recentClicked") == "Polls") {
      Polls.find().forEach((poll) => {
        if (poll.createdBy==Meteor.userId()) {
          recents.push(poll);
        }
      });
    }
    return recents;
  }
})
