// Filename: chapter add.js
define([ 'tubu', 'text!/tmpl/chapter/add.html' ], function(Tubu, template) {

  var View = Tubu.view({
    id : 'content',
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

      this.$el.html(this.template(_.extend(Tubu.Config, this.model.toJSON())));
      
      this.editor = new Tubu.Wysiwyg({
        placeholder: Tubu.Config.lang.chapter.bodyPlaceholder,
        attrs: {
          required: 'true',
          'error-message-required': Tubu.Config.messages.chapter.bodyRequired
        }
      });
      
      this.$('#body').html(this.editor.render().$el);
      
      this.editor.initEditor();
      
      return this;
    },

    save : function(event) {
      event.preventDefault();
      if (!Tubu.Validate.run(this.$('form'))) {
        return;
      }
      
      this.model.set({
        title: this.$('[name="title"]').val(),
        body: this.$('#editor').html()
      });
      
      this.model.save();
      
    },
    change: function() {
      this.app.navigate('/chapter/' + this.model.get('id'), {trigger: true});
    }

  });

  return View;
});
