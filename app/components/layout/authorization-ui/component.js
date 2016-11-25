import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    signIn: function() {
      this.get('session').open('firebase', { provider: 'google'}).then(function() {
        // console.log(data.currentUser.name);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
