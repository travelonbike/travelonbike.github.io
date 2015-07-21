var gulp = require('gulp'),
    connect = require('gulp-connect'),
    copy = require('gulp-copy'),
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

gulp.task('js', function() {
  gulp.src('./app/js/*.js')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(connect.reload())
});

gulp.task('css', function(){
  gulp.src('./app/styles/*.styl')
    .pipe(stylus({ use: nib(), compress:true }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload());
});

gulp.task('html', function(){
  gulp.src('./app/*.jade')
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(['./app/*.jade'], ['html']);
  gulp.watch(['./app/styles/*.styl'], ['css']);
  gulp.watch(['./app/js/*.js'], ['js']);
});

gulp.task('default', ['server', 'watch']);
