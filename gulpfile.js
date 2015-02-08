var gulp       = require( 'gulp' )
  , uglify     = require( 'gulp-uglify' )
  , concat     = require( 'gulp-concat' )
  , browserify = require( 'gulp-browserify' );
  // , karma      = require( 'karma' ).server;


gulp.task( 'build-lib', function () {
    return gulp.src( 'src/index.js' )
               .pipe( browserify() )
               .pipe( gulp.dest( 'dist/' ) );
});


gulp.task( 'build-lib-min', function () {
    return gulp.src( 'src/index.js' )
               .pipe( browserify() )
               .pipe( uglify() )
               .pipe( concat( 'front-log.min.js' ) )
               .pipe( gulp.dest( 'dist/' ) );
});


gulp.task( 'build-lib-demo', function () {
    return gulp.src( 'src/index.js' )
               .pipe( browserify() )
               // .pipe( concat( 'front-log.js' ) )
               .pipe( gulp.dest( 'demo/js/' ) );
});


gulp.task( 'copy-demo', ['build-lib'], function () {
    return gulp.src( 'src/main.js' )
               .pipe( gulp.dest( 'dist/' ) );
});


gulp.task( 'build-demo', function () {
    return gulp.src( 'demo/js/main.js' )
               .pipe( browserify() )
               .pipe( concat( 'output.js' ) )
               .pipe( gulp.dest( 'demo/js/' ) );
});


var deps = [ 'build-lib', 'build-lib-min', 'build-demo' ];
gulp.task( 'default', deps );

