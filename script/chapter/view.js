// Filename: chapter view.js
define([ 'tubu', 'text!/tmpl/chapter/view.html' ], function(Tubu, template) {

  var View = Tubu.view({
    id : 'content',
    template : _.template(template),
    initialize : function(obj, app_router) {
      this.app = app_router;
      this.model.on('change', this.render, this);
    },

    events : {
      'click a' : 'clickLink'
    },
    render : function() {
      var values = {
        body : 'Test coi có empty không'
      };

      this.$el.html(this.template(_.extend(values, this.model.toJSON())));
      return this;
    }

  });

  return View;
});
