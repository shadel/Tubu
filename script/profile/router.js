// Filename: router.js of profile
define([ 'tubu', 'profile/view' ], function(Tubu, View) {
  var initialize = function(app_router) {

    var Model = Tubu.model({
      urlRoot : '/api/api/profiles/profile/id/'
    });
    
    var ItemModel = Tubu.model({
      urlReadFlag: '/api/api/stories/togglereadflag/id/',
      toggleReadFlag: function() {
        this.urlRoot = this.urlReadFlag;
        this.fetch();
      }
        
    });

    var Collection = Tubu.collection({
      url : '/api/api/stories/{0}/id/{1}',
      model: ItemModel
    });

    app_router.on('route:showProfile', function(id) {
      var model = new Model();
      model.urlRoot += id;

      var ownerCollection = new Collection();
      ownerCollection.url = Tubu.StringUtil.mapping(ownerCollection.url, 'owner', id);

      var followCollection = new Collection();
      followCollection.url = Tubu.StringUtil.mapping(followCollection.url, 'follow', id);
      
      Tubu.ViewManager.show({
        view : View,
        name : 'profile',
        selector : 'content',
        initialize : function(view, element) {

          var profileView = view.initialize({
            el : element,
            model : model,
            ownerCollection : ownerCollection,
            followCollection: followCollection
          }, app_router);

          return profileView;
        }
      });

      model.fetch();
      followCollection.fetch();
    });

  };
  return {
    initialize : initialize
  };
});