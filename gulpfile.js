/* globals require */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
sass         = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
coffee       = require('gulp-coffee'),
concat       = require('gulp-concat'),
connect      = require('gulp-connect');

// paths variables
var stylesPath = 'app/assets/styles',
scriptsPath    = 'app/assets/scripts';

gulp.task('styles', function () {
  return gulp.src(stylesPath + '/**/*.scss')
  .pipe(sass({style: 'expanded'}), gutil.log('Compiling styles', 'Styles compiled'))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(stylesPath));
});

gulp.task('coffee', function () {
  return gulp.src(scriptsPath + '/**/*.coffee')
  .pipe(coffee({bare: true})).on('error', gutil.log)
  .pipe(gulp.dest(scriptsPath));
});

gulp.task('scripts', ['coffee'], function () {
  return gulp.src(scriptsPath + '/**/*.js')
  .pipe(jshint(), gutil.log('Running jsHint'))
  .pipe(jshint.reporter('default'))
  .pipe(concat('script.js'), gutil.log('Concatenating scripts files', 'Done'))
  .pipe(gulp.dest(scriptsPath));
});

gulp.task('connect', connect.server({
  root: './app',
  port: 1337,
  livereload: true,
  open: {
    file: 'index.html',
    browser: 'Google Chrome'
  }
}));

gulp.task('watch', function () {
  gulp.watch([ stylesPath + '/**/*.scss'], ['styles']);
  gulp.watch([ scriptsPath + '/**/*.coffee'], ['scripts']);
  gulp.watch([
    './app/**/*.html',
    './app/assets/styles/**/*.css',
    './app/assets/scripts/**/*.js'
  ], connect.reload);
});

gulp.task('serve', ['connect', 'styles', 'scripts', 'watch']);

gulp.task('clean', function () {
  gutil.log('Clean task goes here...');
});

gulp.task('build', function () {
  gutil.log('Build task goes here...');
});

gulp.task('default', function () {
  gutil.log('Default task goes here...');
});