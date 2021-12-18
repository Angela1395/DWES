const got = require('got');

(async () => {
	try {
		const response = await got('https://github.com/Angela1395');
		console.log(response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();