const NEW_CHAT_POINTS = 5;
const NEW_POST_POINTS = 1;
const NEW_POLL_POINTS = 3;
const BAD_POST_INPUT_ID = "badPostInput";
const BAD_CHAT_INPUT_ID = "badChatInput";
const BAD_POLL_INPUT_ID = "badPollInput";
Session.set(BAD_POST_INPUT_ID,false);
Session.set(BAD_CHAT_INPUT_ID,false);
Session.set(BAD_POLL_INPUT_ID,false);

Template.chat.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:5,
                        sort: {createdAt: -1}})},
  getBadPostInputState() {
    console.log("bad post input state="+Session.get(BAD_POST_INPUT_ID));
    return Session.get(BAD_POST_INPUT_ID);
  },
  getBadChatInputState() {
    console.log("bad chat input state="+Session.get(BAD_CHAT_INPUT_ID));
    return Session.get(BAD_CHAT_INPUT_ID);
  },
  getBadPollInputState() {
    console.log("bad poll input state="+Session.get(BAD_POLL_INPUT_ID));
    return Session.get(BAD_POLL_INPUT_ID);
  }
})


Template.chat.events({
  "click #postsubmit-js"(event,instance){
    event.preventDefault();
    console.log("the button was clicked")
    const theTitle = $("#posttitle-js").val();
    const theDesc = $("#postdesc-js").val();
    const thePhoto = $("#postphoto-js").val();  // read the user's chat text ...
    if (theTitle == "" || theDesc == "" || thePhoto == "") {
      Session.set(BAD_POST_INPUT_ID,true);
    }
    else {
      Session.set(BAD_POST_INPUT_ID,false);
      const post=
      {title:theTitle,
       desc:theDesc,
       url:thePhoto,
       createdAt:new Date(),
       createdBy:Meteor.userId()
     };
     console.log(`just created ${JSON.stringify(post)}`);
      Posts.insert(post);
      let prof = Profiles.findOne({owner:Meteor.userId()});
      prof.points += NEW_POST_POINTS;
      Profiles.update(prof._id,prof);
      Router.route("home#"+post.title);
      Router.go('home');
    }
  },
    "click #roomsubmit-js"(event,instance){
      event.preventDefault();
      console.log("the button was clicked")
      const theTitle = $("#roomname-js").val();
      const theDesc = $("#roomdesc-js").val();
      const theInvite = $("#roominvite-js").val();
      if (theTitle == "" || theDesc == "" || theInvite == "") {
        Session.set(BAD_CHAT_INPUT_ID,true);
      }
      else {
        Session.set(BAD_CHAT_INPUT_ID,false);
        const ChatRoom=
        {title:theTitle,
         desc:theDesc,
         invites:theInvite,
         createdAt:new Date(),
         createdBy:Meteor.userId()
       };
       Chats.insert(ChatRoom);
       console.log(`just created ${JSON.stringify(ChatRoom)}`)
       let prof = Profiles.findOne({owner:Meteor.userId()});
       prof.points += NEW_CHAT_POINTS;
       Profiles.update(prof._id,prof);
        Router.go('profilepage')
      }
    },

    "click #pollsubmit-js"(event,instance){
      event.preventDefault();
      console.log("the button was clicked")
      const theTitle = $("#polltitle-js").val();
      const theDesc = $("#polldesc-js").val();
      const theTopic = $("#polltopic-js").val();
      const theLength = $("#polllength-js").val();
      if (theTitle == "" || theDesc == "" || theTopic == "" || theLength == "") {
        Session.set(BAD_POLL_INPUT_ID,true);
      }
      else {
        Session.set(BAD_POLL_INPUT_ID,false);
        const poll=
        {title:theTitle,
         desc:theDesc,
         topic:theTopic,
         length:theLength,
         createdAt:new Date(),
         createdBy:Meteor.userId()
       };
       Polls.insert(poll);
       console.log(`just created ${JSON.stringify(poll)}`)
       let prof = Profiles.findOne({owner:Meteor.userId()});
       prof.points += NEW_POLL_POINTS;
       Profiles.update(prof._id,prof);
        Router.go('profilepage')
      }
    }
});
