var gulp = require('gulp');
var browser = require('browser-sync');
var stylus = require('gulp-stylus')
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var jeet = require('jeet');
var kouto = require('kouto-swiss');
var rupture = require('rupture');

var config = require('./config').stylus;
var notifyErrors = require('./notify-errors');

gulp.task('stylus', function() {
    return gulp
        .src(config.src)
        .pipe(sourcemaps.init())
        .pipe(stylus({
            use: [kouto(), jeet(), rupture()]
        }))
        .on('error', notifyErrors)
        .pipe(sourcemaps.write())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest(config.dest))
        .pipe(browser.reload({stream: true}));
});

gulp.task('stylus:watch', ['stylus'], function() {
    gulp.watch(config.watch, ['stylus']);
});
