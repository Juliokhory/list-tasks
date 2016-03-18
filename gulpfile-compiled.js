/**
 * Created by khory on 14/03/2016.
 */
'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var stylus = require('gulp-stylus');

gulp.task('es6', function () {
    return gulp.src('./assets/js/*.js').pipe(babel({
        presets: ['es2015']
    })).pipe(gulp.dest('./js/'));
});

gulp.task('styles', function () {
    return gulp.src('./assets/css/*.styl').pipe(stylus()).pipe(gulp.dest('./css/'));
});

gulp.task('default', function () {
    gulp.watch('./assets/js/*.js', ['es6']);
    gulp.watch('./assets/css/*.styl', ['styles']);
});

//# sourceMappingURL=gulpfile-compiled.js.map