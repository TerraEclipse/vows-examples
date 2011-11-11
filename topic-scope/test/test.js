var vows = require('vows'),
    should = require('should'),
    meals = require('../meals');


var suite = vows.describe('Topic Scope');

suite.addBatch({
  'When eating breakfast': {
    topic: function() {
      meals.breakfast(this.callback);
    },

    'we should have eggs and bacon': function(err, eggs, bacon) {
      console.log('- err', err);
      console.log('- eggs', eggs);
      console.log('- bacon', bacon);
      eggs.should.equal('eggs');
      bacon.should.equal('bacon');
    },

    'and then we eat lunch': {
      topic: function(err, eggs, bacon) {
        console.log('- - err', err);
        console.log('- - eggs', eggs);
        console.log('- - bacon', bacon);
        meals.lunch(this.callback);
      },

      'we should have null and a sandwich': function(err, empty, sandwich) {
        console.log('- - err', err);
        console.log('- - null', empty);
        console.log('- - sandwich', sandwich);
        should.not.exist(empty);
        sandwich.should.equal('sanwich');
      },

      'and then we eat dinner': {
        topic: function(err, empty, sandwich, err, eggs, bacon) {
          console.log('- - - err', err);
          console.log('- - - null', empty);
          console.log('- - - sandwich', sandwich);
          console.log('- - - eggs', eggs);
          console.log('- - - bacon', bacon);
          meals.dinner(this.callback);
        },

        'we should have steak and salad': function(err, steak, salad) {
          console.log('- - - err', err);
          console.log('- - - steak', steak);
          console.log('- - - salad', salad);
          steak.should.equal('steak');
          salad.should.equal('salad');
        }
      }
    }
  }
});

suite.export(module);