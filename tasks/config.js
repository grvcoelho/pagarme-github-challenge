var dest = './dist';
var src = './src';

module.exports = {
	browser: {
		baseDir: dest,
		port: 4000
	},

	browserify: {
		src: src + '/app/**/index.js',
		dest: dest + '/assets/js',
		watch: src + '/app/**/*.js'
	},

	clean: {
		path: dest
	},

	images: {
		src: src + '/assets/img/**',
		dest: dest + '/assets/img',
		settings: {
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}
	},

	jade: {
		src: src + '/**/*.jade',
		dest: dest,
		settings: {
			pretty: false
		}
	},

	lint: {
		src: src + '/app/**/*.js'
	},

	markup: {
		src: src + '/**/*.html',
		dest: dest
	},

	stylus: {
		src: src + '/assets/styl/**/index.styl',
		dest: dest + '/assets/css',
		watch: src + '/assets/styl/**/*.styl'
	}
};
