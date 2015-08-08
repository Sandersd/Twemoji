Wordlist = new Mongo.Collection("wordlist");
if (Meteor.isServer) {

  Meteor.startup(function() {

    var Twit = Meteor.npmRequire('twit');

    var T = new Twit({
      consumer_key: "zeaZA6so3lQJWBuvwYenj8GeF",
      consumer_secret: "kN75GOBU4xSYIq3cVEZ2ufa4a6qjoCEXdIUMx98cIflI4K1no8",
      access_token: "354446069-j4lVa3LvsLUfsdtRCJjiDOPazXBCC9BsxVUGXleb",
      access_token_secret: "sgTsXbbDsKY9TnMCPpCitZDgKkSjGIOVsmEgb0t66u0qL"
    });

    /*T.get('search/tweets',
        {
            q: 'trending',
            count: 50
        },
        function(err, data, response) {
            for(var i=0; i<50; i++) {
                console.log(i);
                //if(data.statuses[i].place !== null) {
                  console.log(data.statuses[i]);
                //}
            }

        }
    );*/
    console.log(Microsoft.translate("Hello world", "nl"));

    var stream = T.stream('statuses/sample');

stream.on('tweet', Meteor.bindEnvironment (function (tweet) {

  if(tweet['lang'] === 'en') {
    if(tweet['place'] !== null) {

      console.log(tweet);
    }
  }
}));



  });
}

//invoke the server method
if (Meteor.isClient) {

}
