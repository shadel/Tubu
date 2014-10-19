// Filename: router.js
define([ 'tubu', 'text!/tmpl/storydetail/add.html' ], function(Tubu, template) {

  var View = Tubu.view({
    template : _.template(template),
    initialize : function(obj, app_router) {
      this.app = app_router;
      this.model.on('change:id', this.change, this);
    },

    events : {
      'click #save' : 'save',
      'click #cancel' : 'cancel'
    },
    render : function() {
      var value = this.model.toJSON();
      this.$el.html(this.template(_.extend(Tubu.Config, value)));
      return this;
    },

    save : function(event) {
      event.preventDefault();
      if (!Tubu.Validate.run(this.$('form'))) {
        return;
      }
      
      this.model.set({
        title: this.$('[name="title"]').val(),
        storyType: this.$('[name="storyType"]').val()
      });
      
      this.model.save();
      
    },
    change: function() {
      this.app.navigate('/story/' + this.model.get('id'), {trigger: true});
    }
  });

  return View;
});
