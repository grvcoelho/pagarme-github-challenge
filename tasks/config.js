var dest = './dist';
var src = './src';

module.exports = {
	browser: {
		baseDir: dest,
		port: 4000
	},

	browserify: {
		src: src + '/js/**/index.js',
		dest: dest + '/assets/js',
		watch: src + '/js/**/*.js'
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
		src: src + '/js/**/*.js'
	},

	markup: {
		src: src + '/**/*.html',
		dest: dest
	},

	stylus: {
		src: src + '/styl/**/index.styl',
		dest: dest + '/assets/css',
		watch: src + '/styl/**/*.styl'
	}
};
