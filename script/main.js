require.config({
  baseUrl: "/script/",
  paths: {
    jquery: 'libs/jquery.min',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    bootstrap: 'libs/bootstrap'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery']
    }
  }
});

require([
         'app',
         'bootstrap'
       ], function(App) {
      
	 App.initialize();
       
});