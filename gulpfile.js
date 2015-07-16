var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');

// SCSS 

gulp.task('sass', function() {
  return sass('./_dev/scss/', {style: 'compressed' })
  .pipe(gulp.dest('./_prod/css/'));
});

// Minify JS

gulp.task('compress', function() {
  return gulp.src('./_dev/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./_prod/js/'));
});

// Compile Jade

gulp.task('jade', function() {
 
  gulp.src('./_dev/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./_prod/'))
});

// Moves Images

gulp.task('images', function() {
  return gulp.src('./_dev/img/*')
    .pipe(gulp.dest('./_prod/img/'))
});


gulp.task('default', ['sass','compress','jade','images']);