// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'storylist/view'
], function($, _, Backbone, Config, ViewManager, View){
	var Collection = Backbone.Collection.extend({});
	
  var initialize = function(app_router){
	  
    app_router.on('route:storyList', function(){
    	var collection = new Collection();
    	
    	ViewManager.show({
    		view: View,
    		name: 'storyList',
    		selector: 'mainContainer',
    		noReplace: true,
    		initialize: function(view, element){
        		
    			console.log(collection.toJSON());
        		return view.initialize({
        			el: element,
        			collection: collection
        		}, app_router);
        	}
    	});
    	collection.set([{
    		id: 1,
    		title: 'Pham Nhan Tu Tien',
    		image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
    		summary: 'Pham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu Tien'
    	}, {
    		id: 2,
    		title: 'Pham Nhan Tu Tien',
    		image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
    		summary: 'Pham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu Tien'
    	}, {
    		id: 3,
    		title: 'Pham Nhan Tu Tien',
    		image: 'http://fm2.xs8xs8.cn/data/cover/84/204744.jpg',
    		summary: 'Pham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu TienPham Nhan Tu Tien'
    	}]);
    });
    
    
  };
  return {
    initialize: initialize
  };
});
