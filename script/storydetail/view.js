// Filename: router.js
define([ 'tubu', 'storydetail/item', 'text!/tmpl/storydetail/view.html'], function(Tubu, Item, template) {

  var View = Tubu.view({
    template : _.template(template),
    initialize : function(obj, app_router) {
      this.chapterCollection = obj.chapterCollection;
      this.app = app_router;
      this.model.on('change', this.render, this);
      this.chapterCollection.on('add', this.addOwnerChapter, this);
      this.chapterCollection.on('reset', this.resetOwnerChapter, this);
      
    },

    events : {
      'click #storyChapterTab' : 'refreshStoryOwnerTab',
      'click #addNewStory' : 'addNewChapter'
    },
    render : function() {
      var value = this.model.toJSON();
      if (value.story) {
        value.story.summary = Tubu.format.line(value.story.summary);
        this.$el.html(this.template(_.extend(Tubu.Config, value)));
      } else {
        this.$el.html(_.template(Tubu.Config.loadingTemp)(_.extend(Tubu.Config, value)));
      }
      return this;
    },
    
    addOwnerChapter: function(model) {
      this.$('#storyChapter ul').append((Item.initialize({model: model}, this.app)).render().$el);
    },
    
    resetOwnerChapter: function() {
      this.$('#storyChapter ul').empty();
    },
    
    refreshStoryOwnerTab: function() {
      this.chapterCollection.fetch();
    },
    
    addNewChapter: function() {
    }
  });

  return View;
});
