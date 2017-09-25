var webpack = require('webpack');
var config = require('../webpack.prod.config');

process.env.NODE_ENV = 'production';

webpack(config).run(function(err, stats) {
	if (err) {
		console.error(err);
		return 1;
	}

	var jsonStats = stats.toJson();

	if (jsonStats.hasErrors) {
		return jsonStats.errors.map(function(error) {
			return console.log(error);
		});
	}

	if (jsonStats.hasWornings) {
		return jsonStats.warnings.map(function(warnings) {
			console.log('Webpack generated the following warnings: ');
			return console.log(warnings);
		});
	}

	console.log('Webpack stats: ' + stats);

	console.log('Your app is compiled in production mode.');

	return 0;
});
