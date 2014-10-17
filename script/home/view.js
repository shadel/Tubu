// Filename: view.js home
define([ 'tubu', 'home/newitem', 'home/hotitem', 'text!/tmpl/home/view.html' ],
    function(Tubu, NewItem, HotItem, template) {

      var View = Tubu.view({
        id : 'content',
        template : _.template(template),
        initialize : function(obj, app_router) {
          this.newCollection = obj.newCollection;
          this.hotCollection = obj.hotCollection;
          this.app = app_router;
          this.newCollection.on('add', this.appendToNew, this);
          this.hotCollection.on('add', this.appendToHot, this);
        },

        render : function() {
          this.$el.html(this.template(Tubu.Config));
          this.newCollection.each(this.appendToNew, this);
          this.hotCollection.each(this.appendToHot, this);
          return this;
        },

        appendToNew : function(model, index) {
          this.$('#newStory').append((NewItem.initialize({
            model : model
          }, this.app)).render().$el);
        },

        appendToHot : function(model, index) {
          this.$('#hotStory').append((HotItem.initialize({
            model : model
          }, this.app)).render().$el);
        }
      });

      return View;
    });
