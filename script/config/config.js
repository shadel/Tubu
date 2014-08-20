define(['config/lang', 'text!/tmpl/common/loading.html'], function(Lang, loadingTemp) {
	return {
		root: '/',
		lang: Lang,
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