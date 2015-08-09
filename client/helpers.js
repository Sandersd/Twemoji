Template.vis.helpers({

	tweets: function() {
		Tweets.find({$sort: {created: -1}});
	}
});