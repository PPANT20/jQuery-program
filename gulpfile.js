var gulp=require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var livereload  = require('gulp-livereload');


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'html'
    },
  })
})

gulp.task('sass', function() {
  return gulp.src('scss/style.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


/*
gulp.task('watch', ['sass'], function (){
  gulp.watch('css/styles.scss',['sass']).on('change',function(file){
      //livereload.changed(file.path); 
  }); 
});
*/
/*
gulp.task('watch', function() {
  gulp.watch('scss/style.scss', function() {
    //gulp.run(['sass', 'browserSync']);
    gulp.start(['sass']);
  });
});
*/
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('scss/style.scss').on('change',function(file){
       livereload.changed('scss/style.scss');
  });
}); 