Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('about');
Router.route('discover');
Router.route('chat');
Router.route('myprofile');
<<<<<<< HEAD
Router.route('search')
=======
Router.route('sponsors');
Router.route('discover')
>>>>>>> 3f6e958b350861dccce8f3accff1b53eccb9804b
