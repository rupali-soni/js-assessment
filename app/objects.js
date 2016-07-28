exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
	  return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
	  console.log(constructor);
	  constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
	  console.log(obj);
	  var result = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	    	  result.push(key + ': ' + obj[key]);
	      }
	    }
	    console.log(result);
	    return result;
  }
};
