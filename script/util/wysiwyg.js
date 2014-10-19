define(
    [ 'jquery', 'underscore', 'backbone', 'text!/tmpl/common/wysiwyg.html' ],
    function($, _, Backbone, template) {
      var View = Backbone.View
          .extend({

            template : _.template(template),
            initialize : function(obj) {
              this.options = {
                placeholder: '...',
                attrs: {}
              };
              
              this.options = _.extend(this.options, obj);
              
            },

            render : function() {
              
              var attrs = "";
              
              _.each(this.options.attrs, function(value, key) {
                attrs += 'data-' + key + "='" + value + "' ";
              });
              
              this.options.attrs = attrs;

              this.$el.html(this.template(this.options));

              return this;
            },
            
            initEditor: function() {
              this.initToolbarBootstrapBindings();
              this.$('#editor').wysiwyg({
                fileUploadError : this.showErrorAlert
              });
            },

            initToolbarBootstrapBindings : function() {
              var fonts = [ 'Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
                  'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact',
                  'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
                  'Times New Roman', 'Verdana' ], fontTarget = this.$('[title=Font]')
                  .siblings('.dropdown-menu');
              $.each(fonts, function(idx, fontName) {
                fontTarget.append($('<li><a data-edit="fontName ' + fontName
                    + '" style="font-family:\'' + fontName + '\'">' + fontName
                    + '</a></li>'));
              });
              this.$('a[title]').tooltip({
                container : 'body'
              });
              this.$('.dropdown-menu input').click(function() {
                return false;
              }).change(
                  function() {
                    $(this).parent('.dropdown-menu').siblings(
                        '.dropdown-toggle').dropdown('toggle');
                  }).keydown('esc', function() {
                this.value = '';
                $(this).change();
              });

              this.$('[data-role=magic-overlay]').each(
                  function() {
                    var overlay = $(this), target = $(overlay.data('target'));
                    overlay.css('opacity', 0).css('position', 'absolute')
                        .offset(target.offset()).width(target.outerWidth())
                        .height(target.outerHeight());
                  });
              if ("onwebkitspeechchange" in document.createElement("input")) {
                var editorOffset = this.$('#editor').offset();
              } else {
                this.$('#voiceBtn').hide();
              }
            },
            showErrorAlert : function(reason, detail) {
              var msg = '';
              if (reason === 'unsupported-file-type') {
                msg = "Unsupported format " + detail;
              } else {
                console.log("error uploading file", reason, detail);
              }
              $(
                  '<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'
                      + '<strong>File upload error</strong> ' + msg + ' </div>')
                  .prependTo(this.$('#alerts'));
            }

          });

      return View;
    });