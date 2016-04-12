var gulp       = require('gulp');
var join       = require('path').join;
var rimraf     = require('rimraf');
var babel      = require('gulp-babel');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');

var PATH = {
	src  : 'src/',
	dest : 'dist/',
    demo : 'demo/'
};

gulp.task('clear', function (next) {
	rimraf(PATH.dest, next);
});

gulp.task('build', ['clear'], function () {
	return browserify(join(PATH.src, 'index.js'), {
        	debug: true,
        	standalone: 'FrontLog'
        })
        .transform('babelify', {
        	presets: ['es2015', 'stage-0'],
        	plugins: ['transform-es2015-modules-commonjs']
        })
        .bundle()
        .on('error', function(err) {
        	console.log('----------------------------------');
        	console.error(err);
        	console.log('----------------------------------');

        	this.emit('end');
        })
        .pipe(source('front-log.js'))
        .pipe(buffer())
        .pipe(gulp.dest(join(PATH.demo)))
        .pipe(gulp.dest(join(PATH.dest)))
        .pipe(uglify())
        .pipe(rename('front-log.min.js'))
        .pipe(gulp.dest(join(PATH.dest)));
});

gulp.task('watch', ['build'], function() {
	gulp.watch(join(PATH.src, '**/*.js'),   ['build']);
});

gulp.task('default', ['build']);
