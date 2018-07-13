Template.chat.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:5,
                        sort: {createdAt: -1}})},

})


Template.chat.events({
  "click #postsubmit-js": function(event){
    event.preventDefault();
    console.log("the button was clicked")
    const theTitle = $("#posttitle-js").val();
    const theDesc = $("#postdesc-js").val();
    const thePhoto = $("#postphoto-js").val();  // read the user's chat text ...
    const post=
    {title:theTitle,
     desc:theDesc,
     url:thePhoto,
     createdAt:new Date(),
     createdBy:Meteor.userId()
   };
   console.log(`just created ${JSON.stringify(post)}`)
    Posts.insert(post);
    Router.go('home')
  },

})
Template.chat.events({
    "click #pollsubmit-js": function(event){
      event.preventDefault();
      console.log("the button was clicked")
      const theTitle = $("#polltitle-js").val();
      const theDesc = $("#polldesc-js").val();
      const theTopic = $("#polltopic-js").val();
      const theLength = $("#polllength-js").val();
      const poll=
      {title:theTitle,
       desc:theDesc,
       topic:theTopic,
       length:theLength,
       createdAt:new Date(),
       createdBy:Meteor.userId()
     };
     console.log(`just created ${JSON.stringify(poll)}`)
      Poll.insert(poll);
      Router.go('home')
    },
})
