import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getStarted: function () {
      this.transitionTo('step', 1);
    },
    whatsThis: function() {
      this.transitionTo('whatsThis');
    }
  }
});
