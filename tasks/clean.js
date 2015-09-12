var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

var config = require('./config').clean;

gulp.task('clean', function() {
    return gulp
        .src(config.path, {read: false})
        .pipe(rimraf());
});
