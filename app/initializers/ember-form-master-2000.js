import Ember from 'ember';
import {initialize} from 'ember-form-master-2000/initializers/fm-initialize';

if(Ember.libraries) {
  Ember.libraries.register('Ember Form Master 2000', '0.0.7');
}

export default {
  name: 'ember-form-master-2000',
  initialize: function(container, application) {
    initialize(container, application);
  }
};