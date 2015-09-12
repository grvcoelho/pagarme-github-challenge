var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish')

var config = require('./config').lint;
var notifyErrors = require('./notify-errors');

gulp.task('lint', function() {
    return gulp
        .src(config.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', notifyErrors)
});

gulp.task('lint:watch', ['lint'], function() {
    gulp.watch(config.src, ['lint']);
});
