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
Router.route('chats/:_id',{name:'chatroom', data: function(){
	const c = Chats.findOne(this.params._id);
	return c
}});
