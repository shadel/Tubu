// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var execute = function(errors) {
    alert(errors[0].type);
  };
  
  

  return {
    execute: execute
  };
});
