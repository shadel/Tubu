// Filename: router.js
define([ 'tubu', 'text!/tmpl/storydetail/add.html' ], function(Tubu, template) {

  var View = Tubu.view({
    template : _.template(template),
    initialize : function(obj, app_router) {
      this.app = app_router;
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
      if (!Tubu.Validate.run($('form'))) {
        return;
      }
      
    }
  });

  return View;
});
