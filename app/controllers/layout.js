import Ember from 'ember';

export default Ember.Controller.extend({
  
  fullPhrase: function () {
    
    if (this.get("phrase")) {
      return this.get("phrase");
    } else {
      return "The Life of Typing";
    }
    
  }.property("phrase")
  
});
