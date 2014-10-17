// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config', 'factory' ],
    function($, _) {

      var addView = function(viewList, options) {
        var selector = viewList[options.selector];

        if (selector && !selector.hide()) {
          return;
        }
        if (selector) {
          selector.deleteEvent();
        }
        viewList[options.selector] = options.initialize(options.view, $('#'
            + options.selector));
        selector = viewList[options.selector];
        selector.show();

        // Todo: only chrome
        // after render force call render of window
        if (_.isFunction(selector.render)) {
          var tempRender = selector.render;
          selector.render = function() {
            var result = tempRender.apply(selector, arguments);
            forceRender(selector.$el);
            return result;
          }
        }
      }

      // Chrome can't render, must force call
      var forceRender = _.once(function($el) {
        $el.css({
          'position' : 'absolute'
        });
        setTimeout(function() {
          $el.css({
            'position' : ''
          })
        }, 100);
      });
      return {
        viewList : {},
        show : function(options) {

          addView(this.viewList, options);

          var selector = options.selector;
          var resultView = this.viewList[selector];
          return resultView;
        }
      };
    });
