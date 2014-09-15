define([ 'jquery', 'underscore', 'backbone', 'viewManager', 'config/config' , 'errors/errorsHandle'],
    function($, _, Backbone, ViewManager, Config, ErrorsHandle) {

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
        },

        hide : function() {
          this.$el.hide();
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
          ErrorsHandle.execute(resp.errors);
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
        collection : createCollection
      };
    });