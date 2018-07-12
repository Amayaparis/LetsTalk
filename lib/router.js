Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('home');
Router.route('userList');
Router.route('contact');
Router.route('chat');
Router.route('about');
Router.route('profile');
Router.route('editprofile');
Router.route('sponsors');
Router.route('discover')
Router.route('search')
