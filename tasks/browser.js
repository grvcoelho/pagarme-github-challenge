var gulp = require('gulp');
var browser = require('browser-sync');

var config = require('./config').browser;

gulp.task('browser', ['stylus:watch'], function() {
    browser({
        server: {
            baseDir: config.baseDir,
        },
        port: 3000
    });
});
