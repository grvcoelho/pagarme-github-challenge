var gulp = require('gulp');
var browser = require('browser-sync');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

var config = require('./config').browserify;
var notifyErrors = require('./notify-errors');

gulp.task('browserify', function() {
    return gulp
        .src(config.src)
        .pipe(browserify(config.settings))
        .on('error', notifyErrors)
        .pipe(rename('scripts.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(browser.reload({stream: true}));
});

gulp.task('browserify:watch', ['browserify'], function() {
    gulp.watch(config.watch, ['browserify']);
});
