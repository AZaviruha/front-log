var gulp       = require( 'gulp' )
  , uglify     = require( 'gulp-uglify' )
  , concat     = require( 'gulp-concat' )
  , browserify = require( 'gulp-browserify' );
  // , karma      = require( 'karma' ).server;


gulp.task( 'build-lib-min', function () {
    return gulp.src( 'src/global.js' )
               .pipe( browserify() )
               .pipe( concat( 'front-log.js' ) )
               .pipe( gulp.dest( 'dist/' ) )
               .pipe( uglify() )
               .pipe( concat( 'front-log.min.js' ) )
               .pipe( gulp.dest( 'dist/' ) );
});


gulp.task( 'build-demo', function () {
    return gulp.src( 'demo/js/main.js' )
               .pipe( browserify() )
               .pipe( concat( 'output.js' ) )
               .pipe( gulp.dest( 'demo/js/' ) );
});


var deps = [ 'build-lib-min', 'build-demo' ];
gulp.task( 'default', deps );

