define([ 'tubu', 'text!/tmpl/main/navi.html' ], function(Tubu, template) {

  var View = Tubu.view({
    id : 'navi',
    template : _.template(template),
    className : "bg-white-only header header-md navbar navbar-fixed-top-xs",
    initialize : function(obj, app_router) {
      this.app = app_router;
      this.model.on('change', this.render, this);
    },

    render : function() {
      this.$el.html(this.template(_.extend(Tubu.Config, this.model.toJSON())));
      return this;
    }
  });

  return View;
});
