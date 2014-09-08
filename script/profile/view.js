// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config', 'profile/item',
    'text!/tmpl/profile/view.html' ],
    function($, _, Backbone, Config, Item, template) {
      var View = Backbone.View.extend({
        template : _.template(template),
        initialize : function(obj, app_router) {
          this.ownerCollection = obj.ownerCollection;
          this.app = app_router;
          this.model.on('change', this.render, this);
          this.ownerCollection.on('add', this.addOwnerChapter, this);
          this.ownerCollection.on('reset', this.resetOwnerChapter, this);
          
        },

        events : {
          'click #storyOwnerTab' : 'refreshStoryOwnerTab',
          'click #addNewStory' : 'addNewStory'
        },
        render : function() {
          var value = this.model.toJSON();
          if (value.profile) {
            this.$el.html(this.template(_.extend(Config, value)));
            
            if (!this.storyWinzar.$el.html()) {
              this.storyWinzar.render();
            }
            
            this.$('#winzarBox').append(this.storyWinzar.$el);
            this.storyWinzar.hide();
            
          } else {
            this.$el.html(_.template(Config.loadingTemp)(_.extend(Config, value)));
          }
          return this;
        },
        
        addOwnerChapter: function(model) {
          this.$('#storyOwner ul').append((Item.initialize({model: model}, this.app)).render().$el);
        },
        
        resetOwnerChapter: function() {
          this.$('#storyOwner ul').empty();
        },
        
        show : function() {
          this.render();
          this.$el.show();
        },

        hide : function() {
          this.$el.hide();
        },
        
        refreshStoryOwnerTab: function() {
          this.ownerCollection.fetch();
        },
        
        setStoryWinzar: function(storyWinzar) {
          this.storyWinzar = storyWinzar;
        },
        
        addNewStory: function() {
          this.storyWinzar.show();
        }
      });

      var initialize = function(obj, app_router) {
        var view = new View(obj, app_router);
        return view;
      };
      return {
        initialize : initialize
      };
    });
