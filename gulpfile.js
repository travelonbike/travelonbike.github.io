var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jade = require('gulp-jade');

gulp.task('server', function(){
  connect.server({
    root: './dist',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true
  });
});

gulp.task('css', function(){
  gulp.src('./app/styles/main.styl')
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('html', function(){
  gulp.src('./app/**/*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(['./app/**/*.jade'], ['html']);
  gulp.watch(['./app/styles/**/*.styl'], ['css']);
});

gulp.task('default', ['server', 'watch']);
