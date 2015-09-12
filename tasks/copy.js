var gulp = require('gulp');
var browser = require('browser-sync');

var config = require('./config').copy;
var notifyErrors = require('./notify-errors');

gulp.task('copy', function() {
    return gulp
        .src(config.src)
        .on('error', notifyErrors)
        .pipe(gulp.dest(config.dest))
        .pipe(browser.reload({stream: true}));
});

gulp.task('copy:watch', ['copy'], function() {
    gulp.watch(config.src, ['copy']);
});
