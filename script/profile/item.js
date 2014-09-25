// Filename: profile/item.js
define([ 'tubu', 'text!/tmpl/profile/item.html' ], function(Tubu, template) {

  var View = Tubu.view({
    className : 'list-group-item clearfix',
    tagName : 'li',
    template : _.template(template),
    initialize : function(obj, app_router) {
      this.app = app_router;
      this.model.on('change', this.render, this);
    },

    events : {
      'click a' : 'clickLink',
    },
    render : function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

  });

  return View;
  ;
});
