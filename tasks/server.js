var gulp = require('gulp');

var tasks = [
    'stylus:watch',
    'jade:watch',
    'markup:watch',
    'images:watch',
    'browserify:watch',
    'copy:watch',
    'browser'
];

gulp.task('server', tasks);
