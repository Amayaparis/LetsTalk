const PREV_ID = "prevPage";
Session.set(PREV_ID,"profilepage");
const MAX_REPORTS = 3;

Template.layout.helpers({
  loginCheck() {
    if (Meteor.userId()) {
      if (!Profiles.findOne({owner:Meteor.userId()})) {
        if (Router.current().route.getName() != "profilepage") {
          Session.set(PREV_ID,Router.current().route.getName());
          console.log("current route="+Router.current().route.getName());
        }
        Router.go("profilepage");
        console.log("User is logged in with no profile.");
      }
      else {
        console.log("going to:"+Session.get(PREV_ID));
        Router.go(Session.get(PREV_ID));
        console.log("User is logged in with a profile.");
      }
    }
    else {
      console.log("User is not logged in.");
    }
  },
  canBan() {
    let target = Profiles.findOne({owner:Meteor.userId()});
    if (!target)
      return false;
    console.log("CAN BAN="+target.reports>=MAX_REPORTS);
    return target.reports>=MAX_REPORTS;
  },
  ban() {
    console.log("BANNING REMOVING PROFILE..");
    let bannable = Profiles.findOne({owner:Meteor.userId()});
    alert("Your account received too many reports and your profile has been removed.");
    Profiles.remove(bannable._id);
  },
})
