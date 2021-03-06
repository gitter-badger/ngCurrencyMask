var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
	scripts: ['src/**/*.js']
};

gulp.task('clean', function (cb) {
	del(['build'], cb);
});

gulp.task('build', ['clean'], function () {
	gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
			.pipe(concat('ng-currency-mask.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'));

	return gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concat('ng-currency-mask.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['build']);
});

gulp.task('default', ['watch', 'build']);