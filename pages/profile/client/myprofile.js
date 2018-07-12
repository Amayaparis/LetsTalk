var chatpage="chat"

function reqsFilled(name,email,pass) {
  console.log("checking required fields...");
  return (name != "" && email != "" && pass != "");
}

Template.editprofile.helpers({

})

Template.editprofile.events({
  "click #updateprof-js"(event,instance) {
    event.preventDefault();
    const name = instance.$('#name-js').val();
    console.log('read name='+name)
    const email = instance.$('#email-js').val();
    console.log('read email='+email);
    const pass = instance.$('#password-js').val();
    console.log('read pass='+pass);
    if (reqsFilled(name,email,pass)) {
      console.log("redirecting back to profile..");
      Router.go("myprofile");
    }
    else {
      console.log("alerting user of the problem..");
      alert("Some of the fields have not been completed!");
    }
  }
})

Template.myprofile.events({
"click #activity": function() {
  chatpage = $("input:radio[name='activity']:checked").val()
  console.log(chatpage)
}})
