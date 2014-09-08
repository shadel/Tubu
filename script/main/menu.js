define([ 'tubu', 'text!/tmpl/main/menu.html' ], function(Tubu, template) {

  var View = Tubu.view({
    id : 'navi',
    template : _.template(template),
    initialize : function(obj, app_router) {
      this.app = app_router;
      this.model.on('change', this.render, this);
    },

    events : {
      'click a' : "clickLink"
    },

    render : function() {
      this.$el.html(this.template(_.extend(Tubu.Config, this.model.toJSON())));
      return this;
    }
  });

  return View;
});
