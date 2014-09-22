var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', []);

var name = 'ng-radial-progress-bar';

var paths = {
  sass: ['/src/**/*.scss'],
  js: ['/src/**/*.js'],
  dist: 'dist',
  cssDist: this.dist + name + '.css'
};

gulp.task('default', ['sass', 'uglify']);

gulp.task('sass', function (done) {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest(paths.dist))
    .pipe(minifyCSS({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.dist))
    .on('end', done);
});

gulp.task('uglify', function (done) {
  gulp.src(paths.js)
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(paths.dist))
    .on('end', done);
});