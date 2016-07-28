exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
	  var dfrd = $.Deferred();
	// simulate async call w/ setTimeout
	    setTimeout(function(){
	      dfrd.resolve(value);
	    }, 50);
	return dfrd.promise();

  },

  manipulateRemoteData: function(url) {
	  var dfrd = $.Deferred();
	  $.ajax({
		  url: url
		}).done(function(data ) {
			var names = data.people.map(function(item) {
			    return item['name'];
			});
			dfrd.resolve(names.sort());
			console.log(names);
		});
	  return dfrd.promise();
  }
};
