// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config',
    'text!/tmpl/profile/story_winzar.html' ],
    function($, _, Backbone, Config, template) {
      var View = Backbone.View.extend({
        className: 'modalDialog',
        template : _.template(template),
        initialize : function(obj, app_router) {
          
        },

        events : {
        },
        render : function() {
          var value = {};
          this.$el.html(this.template(_.extend(Config, value)));
          
          this.$('#wizardform').bootstrapWizard({
            'tabClass': 'nav nav-tabs',
            onNext: this.onNext,
            onTabClick: this.onTabClick,
            onTabShow: this.onTabShow
          });
          
          return this;
        },
        
        onNext: function(tab, navigation, index) {
          var valid = false;
          $('[data-required="true"]', $( $(tab.html()).attr('href') )).each(function(){
            return (valid = $(this).parsley( 'validate' ));
          });
          return valid;
        },
        
        onTabClick: function(tab, navigation, index) {
          return false;
        },
        
        onTabShow: function(tab, navigation, index) {
          var $total = navigation.find('li').length;
          var $current = index+1;
          var $percent = ($current/$total) * 100;
          $('#wizardform').find('.progress-bar').css({width:$percent+'%'});
        },
        
        show : function() {
          this.$el.show();
          this.$("#storyModal").modal();
        },

        hide : function() {
          this.$el.hide();
        },
      });

      var initialize = function(obj, app_router) {
        var view = new View(obj, app_router);
        return view;
      };
      return {
        initialize : initialize
      };
    });
