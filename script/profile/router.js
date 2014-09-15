// Filename: router.js of profile
define([ 'tubu', 'profile/view' ], function(Tubu, View) {
  var initialize = function(app_router) {

    var Model = Tubu.model({
      urlRoot : '/api/api/profiles/profile/id/'
    });

    var Collection = Tubu.collection({
      url : '/api/api/stories/owner/id/'
    });

    app_router.on('route:showProfile', function(id) {
      var model = new Model();
      model.urlRoot += id;

      var ownerCollection = new Collection();
      ownerCollection.url += id;

      Tubu.ViewManager.show({
        view : View,
        name : 'profile',
        selector : 'content',
        initialize : function(view, element) {

          var profileView = view.initialize({
            el : element,
            model : model,
            ownerCollection : ownerCollection
          }, app_router);

          return profileView;
        }
      });

      model.fetch();
    });

  };
  return {
    initialize : initialize
  };
});