import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { computed, run } = Ember;

export default Ember.Component.extend({
  selected: null,
  placeholder: "",
  searchPlaceholder: "Type to search",
  allowClear: false,

  performSearch: task(function * (term) {
    // removed ajax request for demo purposes
    return [
      {
        name: 'foo',
        shortName: 'bar',
        id: 1,
      },
    ];
  }).restartable(),

  actions: {
    openDropdown(select) {
      if (select.isOpen) {
        this.set('placeholder', "");
      } else {
        this.set('placeholder', "Click to expand");
      }

      this.$().keyup(function(e) {
        if(e.keyCode === 9) {
          select.actions.open();
        }
      });
    },

    onclose() {
      this.set('placeholder', "");
    },

    tabCloseDropdown(select, e) {
      if (e.keyCode === 9 && select.isOpen) {
        this.set('selected', select.highlighted);
        select.actions.close();
      }
    },

    updateModelForSelected(model) {
      let modelId = model ? model.id : null;
      this.sendAction('updateModel', modelId);
      this.set('selected', model);
    },
  }
});
