var clickedRecent = "Chats"

function makeDefaultProfile() {
    var k = Profiles.find().count();
    while (Profiles.findOne({name:"Anonymous"+k})) {
      k++;
    }
    return {name:"Anonymous"+k,dob:"",bio:"",followers:[],following:[],points:0};
}

Template.profilepage.helpers({
  getProfile(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile) {
      Profiles.insert(makeDefaultProfile());
    }
    else {
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
  "change #chats-js"(event) {
    console.log("HELLo");
    clickedRecent = "Chats";
    console.log(clickedRecent);
  },
  "change #posts-js"(event,instance) {
    clickedRecent = "Posts";
    console.log(clickedRecent);
  },
  "change #pics-js"(event,instance) {
    clickedRecent = "Pictures";
    console.log(clickedRecent);
  },
  "change #polls-js"(event,instance) {
    clickedRecent = "Polls";
    console.log(clickedRecent);
  }
})

Template.myprofile.helpers({
  getClickedRecent() {
    return clickedRecent;
  },
  getRecentCollection() {
    var recents = [];
    if (clickedRecent == "Chats") {
      for  each (chat in Chats) {
        if (chat.owner==Meteor.userId()) {
          recents.push(chat);
        }
      }
    }
    else if (clickedRecent == "Posts") {
      for each (post in Posts) {
        if (post.owner==Meteor.userId()) {
          recents.push(post);
        }
      }
    }
    else if (clickedRecent == "Pictures") {
      for each (pic in Pictures) {
        if (pic.owner==Meteor.userId()) {
          recents.push(pic);
        }
      }
    }
    else if (clickedRecent == "Polls") {
      for each (poll in Polls) {
        if (polls.owner==Meteor.userId()) {
          recents.push(poll);
        }
      }
    }
    return recents;
  }
})
