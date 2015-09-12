var gulp = require('gulp');
var browser = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var config = require('./config').browserify;
var notifyErrors = require('./notify-errors');

gulp.task('browserify', function() {
    return browserify(config.src)
        .bundle()
        .on('error', notifyErrors)
        .pipe(source('scripts.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(browser.reload({stream: true}));
});

gulp.task('browserify:watch', ['browserify'], function() {
    gulp.watch(config.watch, ['browserify']);
});
