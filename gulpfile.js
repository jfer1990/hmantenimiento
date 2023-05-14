
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); 
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const replace = require('gulp-replace');
const del = require('del');
const uglify = require('gulp-uglify'); // Import the 'uglify' module
//compile scss into css
function style() {
    return gulp.src('dev/sass/**/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error',sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(replace(/(URL\(['"]?)(.*?\.(jpg|png))(['"]?\))/g, '$1$2.webp')) // Convert URLs with JPG/PNG extensions to WebP
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}
gulp.task('minify-css', () => {
    return gulp.src('src/css/**/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css'));
  });
  // move all assets to dist folder
function moveAssets() {
    return gulp.src('src/assets/**/*')
      .pipe(gulp.dest('dist/assets'));
  }
  function cleanAssets() {
    return del(['dist/assets/**/*.jpg', 'dist/assets/**/*.png']);
  }
  // convert jpg and png files to webp
function convertImages() {
    return gulp.src('src/assets/**/*.+(jpg|png)')
      .pipe(imagemin())
      .pipe(webp())
      .pipe(gulp.dest('dist/assets'));
  }
  function minifyJs() {
    return gulp.src('src/js/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
  }
  function copyHtml() {
    return gulp.src('src/index.html')
        .pipe(replace(/(img\/.*).(jpg|png)/g, '$1.webp'))
      .pipe(gulp.dest('dist'));
  }
  function build(callback) {
    return gulp.series(style, 'minify-css', copyHtml, moveAssets, convertImages, minifyJs)(callback);
  }
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
exports.build = build;
exports.watch = watch;