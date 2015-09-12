var gulp = require('gulp');
var browser = require('browser-sync');
var jade = require('gulp-jade');

var config = require('./config').jade;
var notifyErrors = require('./notify-errors');

gulp.task('jade', function() {
    return gulp
        .src(config.src)
        .pipe(jade(config.settings))
        .on('error', notifyErrors)
        .pipe(gulp.dest(config.dest))
        .pipe(browser.reload({stream: true}));
});

gulp.task('jade:watch', ['jade'], function() {
    gulp.watch(config.src, ['jade']);
});
