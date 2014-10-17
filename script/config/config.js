define(['config/lang', 'config/messages', 'text!/tmpl/common/loading.html'], function(Lang, Messages, loadingTemp) {
	return {
		root: '/',
		lang: Lang,
		messages: Messages,
		story: {
		  status: {
		    PROCESSING: 0, 
		    FINAL: 1,
		    DROP: 2
		  }
		},
		loadingTemp: loadingTemp
	};
});