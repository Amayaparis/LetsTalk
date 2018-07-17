const RECENT_CLICKED_ID = "recentClicked";
const NAME_EMPTY_ID = "nameEmpty";
const NAME_EXISTS_ID = "nameExists";
Session.set(RECENT_CLICKED_ID,"Chats");
Session.set(NAME_EMPTY_ID,false);
Session.set(NAME_EXISTS_ID,false);

function getRecents() {
  let recents = [];
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

Template.profilepage.helpers({
  getProfile(){
    var theProfile = Profiles.findOne({owner:Meteor.userId()});
    if (!theProfile) {
      theProfile = {name:"",dob:"",bio:"",friends:[],imgSrc:"",reports:0,reportedUsers:[],points:0,owner:Meteor.userId()};
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
  },
})

Template.myprofile.events({
  "click #update-js"(event,instance) {
    const name = instance.$('#name-js').val();
    console.log('read name='+name)
    const dob = instance.$('#dob-js').val();
    console.log('read dob='+dob);
    const bio = instance.$('#bio-js').val();
    console.log('read bio='+bio);
    const iSrc = instance.$('#imgSelect-js').val();
    console.log('read img src='+iSrc);
    if (name == "") {
      Session.set(NAME_EMPTY_ID,true);
    }
    else if (Profiles.find({name:name}).count() > 1) {
      Session.set(NAME_EXISTS_ID,true);
    }
    else {
      Session.set(NAME_EMPTY_ID,false);
      Session.set(NAME_EXISTS_ID,false);
      let prof = Profiles.findOne(this.me._id);
      this.me.name = name;
      this.me.dob = dob;
      this.me.bio = bio;
      this.me.imgSrc = iSrc;
      this.me.friends = prof.friends;
      this.me.reports = prof.reports;
      this.me.reportedUsers = prof.reportedUsers;
      this.me.points = prof.points;
      this.me.owner = prof.owner;
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
    return Session.get(RECENT_CLICKED_ID)  == "Posts";
  },
  isPicsClicked() {
    return Session.get(RECENT_CLICKED_ID)  == "Pictures";
  },
  isPollsClicked() {
    return Session.get(RECENT_CLICKED_ID)  == "Polls";
  },
  getRecentCollection() {
    return getRecents();
  },
  isRecentsEmpty() {
    return getRecents().length == 0;
  },
  noChats() {
    return Chats.find().count() == 0;
  },
  // enableChatDisplay() {
  //   Session.set(ENABLE_CHAT_DISPLAY_ID,true);
  // },
  // disableChatDisplay() {
  //   Session.set(ENABLE_CHAT_DISPLAY_ID,false);
  // }
})
