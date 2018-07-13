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
  "change #chats-js"(event,instance) {
    clickedRecent = "Chats";
  },
  "change #posts-js"(event,instance) {
    clickedRecent = "Posts";
  },
  "change #pics-js"(event,instance) {
    clickedRecent = "Pictures"
  },
  "change #polls-js"(event,instance) {
    clickedRecent = "Polls";
  }
})

Template.myprofile.helpers({
  getClickedRecent() {
    return clickedRecent;
  },
  getRecentCollection() {
    if (clickedRecent == "Chats")
      return Chats;
    else if (clickedRecent == "Posts")
      return Posts;
    else if (clickedRecent == "Pictures")
      return Pictures;
    else if (clickedRecent == "Polls")
      return Polls;
  }
})
