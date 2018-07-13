Template.home.helpers({
  posts(){
    return Posts.find({},{sort:{createdAt:-1}})
  },

})

Template.showpost.events({
  "click .delete"(event,instance){
    console.dir(this)
    Posts.remove(this.post._id)
  }
})
