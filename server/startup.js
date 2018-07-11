Meteor.startup(function(){

	
	if (Profiles.find().count()==0){
		user1 = {name:'Tim Hickey',dob:new Date('7/24/1955 7:30am CST')};
		Profiles.insert(user1)
	}

// this is very insecure, but helpful for development
	Meteor.publish('userList', function (){
  return Meteor.users.find({});
});

});
