// Filename: router.js
define([ 'tubu', 'chapter/view', 'chapter/add' ], function(Tubu, View, AddView) {
  var Model = Tubu.model({
    urlRoot : '/api/api/chapters/chapter/id/'
  });
  
  var AddModel = Tubu.model({
    urlRoot : '/api/api/chapters/add/id/'
  });
  
  var initialize = function(app_router) {
    app_router.on('route:showChapter', function(id) {
      var model = new Model();
      model.urlRoot += id;

      Tubu.ViewManager.show({
        view : View,
        name : 'showChapter',
        selector : 'content',
        initialize : function(view, element) {

          return view.initialize({
            el : element,
            model : model
          }, app_router);
        }
      });
      model.fetch();
    });

    app_router.on('route:addChapter', function(id) {
      var model = new AddModel();
      model.urlRoot += id;
      console.log('addChapter', id)
      Tubu.ViewManager.show({
        view : AddView,
        name : 'addChapter',
        selector : 'content',
        initialize : function(view, element) {

          return view.initialize({
            el : element,
            model : model
          }, app_router);
        }
      });
    });
  };
  return {
    initialize : initialize
  };
});
