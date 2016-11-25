/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'yaat',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    torii: {
   sessionServiceName: 'session'
 },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
    apiKey: "AIzaSyBnY-wKEwtk83qs1lWHO1qhnl4jNmtI46k",
    authDomain: "yaat-7006a.firebaseapp.com",
    databaseURL: "https://yaat-7006a.firebaseio.com",
    storageBucket: "yaat-7006a.appspot.com",
    messagingSenderId: "280086848707"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
