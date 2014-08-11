// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'home/view'
], function($, _, Backbone, Config, ViewManager, View){
	var Collection = Backbone.Collection.extend({});
	
  var initialize = function(app_router){
	  
    app_router.on('route:main', function(){
    	var newCollection = new Collection();
    	var hotCollection = new Collection();
    	
    	ViewManager.show({
    		view: View,
    		name: 'home',
    		selector: 'content',
    		initialize: function(view, element){
        		
        		return view.initialize({
        			el: element,
        			newCollection: newCollection,
        			hotCollection: newCollection
        		}, app_router);
        	}
    	});
    	newCollection.set([{
    		id: 1,
    		title: 'Pham Nhan Tu Tien',
    		image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
    		author: 'Vong Ngu',
    		rank: 1
    	}, {
    		id: 2,
    		title: 'Pham Nhan Tu Tien',
    		image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
    		author: 'Vong Ngu',
            rank: 2
    	}, {
    		id: 3,
    		title: 'Pham Nhan Tu Tien',
    		image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
    		author: 'Vong Ngu',
            rank: 3
    	}, {
          id: 4,
          title: 'Pham Nhan Tu Tien',
          image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
          author: 'Vong Ngu',
          rank: 4
      }, {
        id: 5,
        title: 'Pham Nhan Tu Tien',
        image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
        author: 'Vong Ngu',
        rank: 5
    }, {
      id: 6,
      title: 'Pham Nhan Tu Tien',
      image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
      author: 'Vong Ngu',
      rank: 6
  }, {
    id: 7,
    title: 'Pham Nhan Tu Tien',
    image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
    author: 'Vong Ngu',
    rank: 7
}, {
  id: 8,
  title: 'Pham Nhan Tu Tien',
  image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
  author: 'Vong Ngu',
  rank: 8
}]);
    });
    
    
  };
  return {
    initialize: initialize
  };
});
