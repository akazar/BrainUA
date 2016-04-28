var gulp = require('gulp'),
	 clean = require('gulp-clean'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   less = require('gulp-less');

gulp.task('minify', function () {
   gulp.src('js/main.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'))
});

gulp.task('js', ['clean'], function () {
   gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'));

    gulp.src('js/libs/*.js')
    .pipe(gulp.dest('build/js/libs'));
});

gulp.task('css', ['clean'], function () {
   gulp.src('css/style.less')
      .pipe(less())
      .pipe(gulp.dest('build/css'));
   gulp.src('css/libs/*.css')
    .pipe(gulp.dest('build/css/libs'));
	 gulp.src('css/libs/fonts/*')
    .pipe(gulp.dest('build/css/libs/fonts'));
});

gulp.task('html', ['clean'], function() {
    gulp.src('index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
	return gulp.src('build', {read: false})
		.pipe(clean());
});

gulp.task('default', ['js', 'css', 'html']);