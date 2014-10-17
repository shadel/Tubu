// Filename: router.js
define([ 'tubu', 'profile/item', 'text!/tmpl/profile/view.html' ], function(
    Tubu, Item, template) {
  var View = Tubu.view({
    template : _.template(template),
    initialize : function(obj, app_router) {
      this.ownerCollection = obj.ownerCollection;
      this.followCollection = obj.followCollection;
      this.app = app_router;
      this.model.on('change', this.render, this);
      this.ownerCollection.on('add', this.addOwnerChapter, this);
      this.ownerCollection.on('reset', this.resetOwnerChapter, this);

      this.followCollection.on('add', this.addFollowChapter, this);
      this.followCollection.on('reset', this.resetFollowChapter, this);

    },

    events : {
      'click #storyOwnerTab' : 'refreshStoryOwnerTab',
      'click #storyFollowTab' : 'refreshStoryFollowTab'
    },
    render : function() {
      var value = this.model.toJSON();
      if (value.id) {
        this.$el.html(this.template(_.extend(Tubu.Config, value)));

      } else {
        this.$el.html(_.template(Tubu.Config.loadingTemp)(
            _.extend(Tubu.Config, value)));
      }
      return this;
    },

    addOwnerChapter : function(model) {
      this.$('#storyOwner ul').append((Item.initialize({
        model : model
      }, this.app)).render().$el);
    },

    resetOwnerChapter : function() {
      this.$('#storyOwner ul').empty();
    },

    refreshStoryOwnerTab : function() {
      this.ownerCollection.fetch();
    },
    
    addFollowChapter : function(model) {
      this.$('#storyFollow ul').append((Item.initialize({
        model : model,
        follow: true
      }, this.app)).render().$el);
    },
    
    resetFollowChapter : function() {
      this.$('#storyFollow ul').empty();
    },

    refreshStoryFollowTab : function() {
      this.followCollection.fetch();
    }    

  });

  return View;
});
