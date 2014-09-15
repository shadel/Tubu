// Filename: router.js
define([ 'tubu', 'profile/item', 'text!/tmpl/profile/view.html' ], function(
    Tubu, Item, template) {
  var View = Tubu.view({
    template : _.template(template),
    initialize : function(obj, app_router) {
      this.ownerCollection = obj.ownerCollection;
      this.app = app_router;
      this.model.on('change', this.render, this);
      this.ownerCollection.on('add', this.addOwnerChapter, this);
      this.ownerCollection.on('reset', this.resetOwnerChapter, this);

    },

    events : {
      'click #storyOwnerTab' : 'refreshStoryOwnerTab'
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
    }

  });

  return View;
});
