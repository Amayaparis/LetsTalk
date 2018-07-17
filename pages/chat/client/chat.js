const CHAT_MESSAGE_PTS = 1;

Template.chatroom.helpers({
  messages(){
    return ChatMessages.find({chatroom:this._id},{sort:{when:1}});
  }

})

Template.chatroom.events({
  "click #submitmsg"(event,instance){
    let prof = Profiles.findOne({owner:Meteor.userId()});
    const name =prof.name;
    const msg = instance.$("#usermsg").val()
    console.log("name is "+name)
    console.log("msg is "+msg)
    console.log("chatroom id="+this._id)
    if (msg != "") {
      const newmsg = {
        name:name,
        msg:msg,
        chatroom:this._id,
        when: new Date()
      }
      ChatMessages.insert(newmsg)
      prof.points+= CHAT_MESSAGE_PTS;
      Profiles.update(prof._id,prof);
    }
  }
})
