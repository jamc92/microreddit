if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Postulandome',
    url: 'http://postulando.me/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'https://meteor.com'
  });

  Posts.insert({
    title: 'Bloxie',
    url: 'http://bloxie.ec'
  });
}
