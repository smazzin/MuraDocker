// var path = require('path');
var gulp = require('gulp');
//var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('default', function() {
	gulp.start('bootstrap');
	gulp.start('scss-theme');
});

gulp.task('theme', function() {
	gulp.start('scss-theme');
});

gulp.task('watch', function() {
	

	// Static Server + watching scss/cfm files
	browserSync.init({
		proxy: "localhost"
	});
	gulp.watch('scss/**/*.scss', ['scss-theme']);
	gulp.watch("scss/site/*.scss", ['sass']);
	gulp.watch("templates/**/*.cfm").on('change', browserSync.reload);
});

gulp.task('scss-theme', function() {
	gulp.src('scss/site/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('css/'));
});

gulp.task('bootstrap', function() {
	gulp.src('scss/bootstrap/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('css/'));
});

function swallowError (error) {
	console.log(error.toString());
	this.emit('end');
}
