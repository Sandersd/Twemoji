Wordlist = new Mongo.Collection("wordlist");
Tweets = new Mongo.Collection("tweets");

if (Meteor.isServer) {

  Meteor.startup(function() {

    var Twit = Meteor.npmRequire('twit');

    var T = new Twit({
      consumer_key: "zeaZA6so3lQJWBuvwYenj8GeF",
      consumer_secret: "kN75GOBU4xSYIq3cVEZ2ufa4a6qjoCEXdIUMx98cIflI4K1no8",
      access_token: "354446069-j4lVa3LvsLUfsdtRCJjiDOPazXBCC9BsxVUGXleb",
      access_token_secret: "sgTsXbbDsKY9TnMCPpCitZDgKkSjGIOVsmEgb0t66u0qL"
    });


    //console.log(Microsoft.translate("Hello world", "nl"));

    var stream = T.stream('statuses/sample');

stream.on('tweet', Meteor.bindEnvironment (function (tweet) {

  if(tweet['lang'] === 'en') {
    if(tweet['place'] !== null) {

      console.log(tweet['id'] + ', ' + tweet['place']['bounding_box']['coordinates'][0][0]);


      var id = tweet['id'];
      var coords = tweet['place']['bounding_box']['coordinates'][0][0];
      Tweets.insert({
        id: id,
        coordinates: coords,
        en_text: ''
      });
    }
  } else {
    if(tweet['place'] !== null) {

      console.log(tweet['id'] + ', ' + tweet['place']['bounding_box']['coordinates'][0][0] + ', ' + tweet['text']);


      var id = tweet['id'];
      var coords = tweet['place']['bounding_box']['coordinates'][0][0];
      var enText = Microsoft.translate(tweet['text'], "en");
      Tweets.insert({
        id: id,
        coordinates: coords,
        en_text: enText
      });
    }
  }
}));



  });
}

//invoke the server method
if (Meteor.isClient) {
}
