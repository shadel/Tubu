define([ 'tubu', 'storydetail/view', 'storydetail/add' ], function(Tubu, View, AddView) {

  var Model = Tubu.Backbone.Model.extend({
    urlRoot : '/api/api/stories/detail/id/'
  });
  
  var AddModel = Tubu.Backbone.Model.extend({
    defaults: {
      title: "",
      summary: ""
    },
    urlRoot : '/api/api/stories/add/'
  });

  var Collection = Tubu.Backbone.Collection.extend({
    url : '/api/api/stories/chapter/id/'
  });

  var initialize = function(app_router) {
    app_router.on('route:storyDetail', function(id) {

      var model = new Model();
      model.urlRoot += id;

      var chapterCollection = new Collection();
      chapterCollection.url += id;

      Tubu.ViewManager.show({
        view : View,
        name : 'storyDetail',
        selector : 'content',
        initialize : function(view, element) {

          var profileView = view.initialize({
            el : element,
            model : model,
            chapterCollection : chapterCollection
          }, app_router);

          return profileView;
        }
      });

      model.fetch();
    });
    
    app_router.on('route:addStory', function() {

      var model = new AddModel();

      Tubu.ViewManager.show({
        view : AddView,
        name : 'addStory',
        selector : 'content',
        initialize : function(view, element) {

          var view = view.initialize({
            el : element,
            model : model
          }, app_router);

          return view;
        }
      });

    });

  };
  return {
    initialize : initialize
  };
});
