define([ 'jquery', 'underscore', 'backbone', 'viewManager', 'config/config' , 'errors/errorsHandle', 'util/string', 'util/HTML.format', 'util/validate', 'util/wysiwyg'],
    function($, _, Backbone, ViewManager, Config, ErrorsHandle, StringUtil, HTMLFormat, Validate, Wysiwyg) {

      var defaultView = {
        clickLink : function(event) {
          event.preventDefault();

          var url = $(event.currentTarget).attr('href');
          this.app.navigate(url, {
            trigger : true
          });
        },

        show : function() {
          this.render();
          this.$el.show();
          return true;
        },

        hide : function() {
          this.$el.hide();
          return true;
        },
        
        deleteEvent: function() {
          this.undelegateEvents();
        },
        
        cancel: function() {
          this.app.history.back();
        }
      };

      var createView = function(obj) {
        obj = obj || {};

        var View = Backbone.View.extend(_.extend(defaultView, obj));

        var initialize = function(obj, app_router) {
          var view = new View(obj, app_router);
          return view;
        };
        return {
          initialize : initialize
        };
      };

      var defaultModel = {
          errorhandle: ErrorsHandle,
        parse : function(resp, options) {
          if (resp.error) {
            return this.errorHandle(resp, options);
          } else {
            if (resp.paging) {
              this.pagingHandle(resp, options);
            }
            if (resp.data) {
              return resp.data;
            }
            return resp;
          }
        },

        errorHandle : function(resp, options) {
          if (this.errorhandle && _.isFunction(this.errorhandle.execute)) {
            this.errorhandle.execute(resp.errors);
          } else if (_.isFunction(this.errorhandle)) {
            this.errorhandle(resp.errors);
          }
          
          this.trigger('errors', resp.errors);
          
          return this.attrs;
        },

        pagingHandle : function(resp, options) {

        }
      };

      var createModel = function(obj) {
        return Backbone.Model.extend(_.extend(defaultModel, obj))
      };
      var createCollection = function(obj) {
        return Backbone.Collection.extend(_.extend(defaultCollection, obj))
      };

      var defaultCollection = {
        parse : function(resp, options) {
          if (resp.error) {
            return this.errorHandle(resp, options);
          } else {
            if (resp.paging) {
              this.pagingHandle(resp, options);
            }
            if (resp.data) {
              if (!resp.data.length) {
                this.trigger('dataEmpty');
              }
              return resp.data;
            }
            return resp;
          }
        },

        errorHandle : function(resp, options) {
          return this.models;
        },

        pagingHandle : function(resp, options) {

        }
      };

      return {
        $ : $,
        _ : _,
        Backbone : Backbone,
        Config : Config,
        ViewManager : ViewManager,
        view : createView,
        model : createModel,
        collection : createCollection,
        StringUtil: StringUtil,
        format: HTMLFormat,
        Validate: Validate,
        Wysiwyg: Wysiwyg
      };
    });