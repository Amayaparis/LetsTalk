Template.chatroom.helpers({
  messages(){
    return ChatMessages.find({chatroom:this._id},{sort:{when:1}})
  }

})

Template.chatroom.events({
  "click #submitmsg"(event,instance){
    const name = instance.$("#name").val()
    const msg = instance.$("#usermsg").val()
    const title = instance.$("#title").html()
    console.log("name is "+name)
    console.log("msg is "+msg)
    console.log("title is "+title)
    console.log(this._id)
    console.dir(this)
    const newmsg = {
      name:name,
      msg:msg,
      chatroom:this._id,
      when: new Date()
    }
    ChatMessages.insert(newmsg)

  }
})
