var gulp = require("gulp");
var watch = require("gulp-watch");
var postcss = require("gulp-postcss");

gulp.task('default', function() {
  console.log("Hoooray! you created Gulp task");
});

gulp.task('html', function() {
  console.log("html");
})

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe()
    .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function(){

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  })
})
