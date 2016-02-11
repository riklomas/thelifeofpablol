import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['say'],
  
  fullPhrase: function () {
    
    if (this.get("say")) {
      return this.get("say");
    } else {
      return "Start typing";
    }
    
  }.property("say"),
  
  actions: {
    clickFocus: function () {
      Ember.$.find("input").get(0).focus();
    }
  }
  
});
