var gulp = require('gulp');
var browser = require('browser-sync');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var config = require('./config').images;
var notifyErrors = require('./notify-errors');

gulp.task('images', function() {
    return gulp
        .src(config.src)
        .pipe(changed(config.dest))
        .pipe(imagemin(config.settings))
        .on('error', notifyErrors)
        .pipe(gulp.dest(config.dest))
        .pipe(browser.reload({stream: true}));
});

gulp.task('images:watch', ['images'], function() {
    gulp.watch(config.src, ['images']);
});
