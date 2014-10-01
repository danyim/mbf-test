'use strict';

var gulp = require('gulp');
var b = require('main-bower-files');

gulp.task('default', function () {
    return gulp.src(b({ env: 'production', debugging: true }))
               .pipe(gulp.dest('plugins'));
});
