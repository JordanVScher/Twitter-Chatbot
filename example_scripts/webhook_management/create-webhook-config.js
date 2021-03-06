const request = require('request-promise');
const auth = require('../../helpers/auth.js');
const args = require('../args.js');

if (args.url.slice(-1) === '/') {
	args.url = args.url.slice(0, -1);
}

// request options
const requestOptions = {
	url: `https://api.twitter.com/1.1/account_activity/all/${args.environment}/webhooks.json`,
	oauth: auth.twitter_oauth,
	headers: {
		'Content-type': 'application/x-www-form-urlencoded',
	},
	form: {
		url: `${args.url}/webhook/twitter`,
	},
};


// POST request to create webhook config
request.post(requestOptions).then((body) => {
	console.log(body);
}).catch((body) => {
	console.log(body);
});
