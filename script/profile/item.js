// Filename: profile/item.js
define([ 'tubu', 'text!/tmpl/profile/item.html',
    'text!/tmpl/profile/itemFollow.html' ], function(Tubu, template,
    followTemplate) {

  var View = Tubu.view({
    className : 'list-group-item clearfix',
    tagName : 'li',
    template : _.template(template),
    initialize : function(obj, app_router) {
      if (obj.follow) {
        this.template = _.template(followTemplate);
      }
      this.app = app_router;
      this.model.on('change', this.render, this);
    },

    events : {
      'click a' : 'clickLink',
      'click .readFlag' : 'toggleReadFlag'
    },
    render : function() {
      this.$el.html(this.template(_.extend(Tubu.Config, this.model.toJSON())));
      return this;
    },
    
    toggleReadFlag: function() {
      this.model.toggleReadFlag();
      return false;
    }

  });

  return View;
  ;
});
