const PREV_ID = "prevPage";
Session.set(PREV_ID,"profilepage");

Template.layout.helpers({
  loginCheck() {
    if (Meteor.userId()) {
      if (!Profiles.findOne({owner:Meteor.userId()})) {
        Router.go("profilepage");
        if (Router.current().route.getName() != "profilepage")
          Session.set(PREV_ID,Router.current().route.getName());
        console.log("current route="+Router.current().route.getName());
        console.log("User is logged in with no profile.");
      }
      else {
        Router.go(Session.get(PREV_ID));
        console.log("User is logged in with a profile.");
      }
    }
    else {
      console.log("User is not logged in.")
    }
  }
})
