Template.home.helpers({
  posts(){
    return Posts.find({},{sort:{createdAt:-1}})
  },

})

Template.showpost.helpers({
  canDelete() {
    console.log(this.post.createdBy);
    return Meteor.userId() == this.post.createdBy;
  }
})

Template.showpost.events({
  "click .delete"(event,instance){
    console.dir(this)
    Posts.remove(this.post._id)
  }
})
