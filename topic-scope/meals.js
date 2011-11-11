/**
 * Async functions for vows scope tests.
 */
module.exports = {
  breakfast: function(callback) {
    process.nextTick(function() {
      callback(null, 'eggs', 'bacon');
    });
  },

  lunch: function(callback) {
    process.nextTick(function() {
      callback(null, 'sandwich');
    });
  },

  dinner: function(callback) {
    process.nextTick(function() {
      callback(null, 'steak', 'salad');
    });
  }
}
