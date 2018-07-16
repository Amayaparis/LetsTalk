Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});
Router.route('/','home');
Router.route('home');
Router.route('privacy');
Router.route('contact');
Router.route('chat');
Router.route('about');
Router.route('profilepage');
Router.route('sponsors');
Router.route('discover')
Router.route('search')
