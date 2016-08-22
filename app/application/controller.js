import Ember from 'ember';

export default Ember.Controller.extend({
  someFlag: true,

  actions: {
    toggleSomeFlag() {
      this.toggleProperty('someFlag');
    },

    updateProduct(v) {
      this.send('toggleSomeFlag');
    },
  }
});
