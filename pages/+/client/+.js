Template.chat.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:5,
                        sort: {createdAt: -1}})},

})


Template.chat.events({
  "click #postsubmit-js"(event,instance){
    event.preventDefault();
    console.log("the button was clicked")
    const theTitle = $("#posttitle-js").val();
    const theDesc = $("#postdesc-js").val();
    const thePhoto = $("#postphoto-js").val();  // read the user's chat text ...
    if (theTitle == "" || theDesc == "" || thePhoto == "") {
      alert("Some of the required fields have not been filled.");
    }
    else {
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
      console.log(`profile ${JSON.stringify(prof)}`)
      Profiles.update(prof._id,{name:prof.name,dob:prof.dob,bio:prof.bio,followers:prof.followers,following:prof.following,points:prof.points+1});
      let prof2 = Profiles.findOne({owner:Meteor.userId()});
      console.log(`profile ${JSON.stringify(prof2)}`)
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
        alert("Some of the required fields have not been filled.");
      }
      else {
        const ChatRoom=
        {title:theTitle,
         desc:theDesc,
         invites:theInvite,
         createdAt:new Date(),
         createdBy:Meteor.userId()
       };
       Chats.insert(ChatRoom);
       console.log(`just created ${JSON.stringify(ChatRoom)}`)
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
        alert("Some of the required fields have not been filled.");
      }
      else {
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
        Router.go('profilepage')
      }
    }
});
