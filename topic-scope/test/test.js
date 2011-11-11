var vows = require('vows'),
    should = require('should'),
    meals = require('../meals');


var suite = vows.describe('Topic Scope');

suite.addBatch({
  'When eating breakfast': {
    topic: function() {
      meals.breakfast(this.callback);
    },

    'we should have eggs and bacon': function(eggs, bacon) {
      console.log('- eggs', eggs);
      console.log('- bacon', bacon);
      eggs.should.equal('eggs');
      bacon.should.equal('bacon');
    },

    'a separate level': {
      'more levels': {
        'the actual vow': function(eggs, bacon){
          eggs.should.equal('eggs');
          bacon.should.equal('bacon');    
        }
      }
    },

    'and then we eat lunch': {
      topic: function(eggs, bacon) {
        console.log('- - eggs', eggs);
        console.log('- - bacon', bacon);
        meals.lunch(this.callback);
      },

      'we should have null and a sandwich': function(empty, sandwich) {
        console.log('- - null', empty);
        console.log('- - sandwich', sandwich);
        should.be.empty(empty);
        sandwich.should.equal('sanwich');
      },

      'and then we eat dinner': {
        topic: function(empty, sandwich, eggs, bacon) {
          console.log('- - - null', empty);
          console.log('- - - sandwich', sandwich);
          console.log('- - - eggs', eggs);
          console.log('- - - bacon', bacon);
          meals.dinner(this.callback);
        },

        'we should have steak and salad': function(steak, salad) {
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