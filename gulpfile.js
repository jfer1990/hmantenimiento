
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); 
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
//compile scss into css
function style() {
    return gulp.src('dev/sass/**/style.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}
gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
  });
function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html"
        }
    });
    gulp.watch('dev/sass/**/*.scss', style);
    gulp.watch('src/index.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;