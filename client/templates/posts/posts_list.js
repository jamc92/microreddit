var postsData = [
  {
    title: 'Introducing Postulandome',
    url: 'http://postulando.me/'
  },
  {
    title: 'Meteor',
    url: 'https://www.meteor.com'
  },
  {
    title: 'Bloxie',
    url: 'http://bloxie.co'
  }
];
Template.postsList.helpers({
  posts: postsData
});
