define(['config/lang'], function(Lang) {
	return {
		root: '/',
		lang: Lang,
		story: {
		  status: {
		    PROCESSING: 0, 
		    FINAL: 1,
		    DROP: 2
		  }
		}
	};
});