Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
<<<<<<< HEAD
	notFoundTemplate: 'notFound',
=======
>>>>>>> 4ad370146ebb76787e52a6c605d6edc1e937b1b8
	waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
<<<<<<< HEAD
Router.route('/posts/:_id', {
	name: 'postPage',
	data: function() { return Posts.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
=======
Router.route('/posts/:_id', {name: 'postPage'})
>>>>>>> 4ad370146ebb76787e52a6c605d6edc1e937b1b8
