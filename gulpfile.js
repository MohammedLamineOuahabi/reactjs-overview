const { src, dest, parallel, series, watch } = require('gulp');

// Load plugins

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');

const browsersync = require('browser-sync').create();

// Clean dist

function clear() {
  return src('./dist/*', {
    read: false
  }).pipe(clean());
}

// JS function

function js() {
  const source = './src/js/*.js';

  return (
    src(source, { allowEmpty: true })
      .pipe(changed(source))
      // Stop the process if an error is thrown.
      .pipe(plumber())
      // Transpile the JS code using Babel's preset-env.
      .pipe(
        babel({
          presets: [
            [
              '@babel/env',
              {
                modules: false
              }
            ]
          ]
        })
      )
      //.pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(
        rename({
          extname: '.min.js'
        })
      )
      .pipe(dest('./dist/js/'))
      .pipe(browsersync.stream())
  );
}
// css function

function css() {
  const source = ['./src/css/**/*.*', './src/css/*.*'];
  return src(source, { allowEmpty: true }).pipe(dest('./dist/css/')).pipe(browsersync.stream());
}

// SASS function

function scss() {
  const source = './src/scss/styles.scss';

  return src(source, { allowEmpty: true })
    .pipe(changed(source))
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(
      rename({
        extname: '.min.css'
      })
    )
    .pipe(cssnano())
    .pipe(dest('./dist/css/'))
    .pipe(browsersync.stream());
}

// Optimize images

function img() {
  return src(['./src/images/*', './src/images/**/*']).pipe(imagemin()).pipe(dest('./dist/images'));
}

function html() {
  return src('./src/*.html').pipe(dest('./dist')).pipe(browsersync.stream());
}

// Watch files

function watchFiles() {
  watch(['./src/scss/*.scss', './src/scss/**/*.scss'], scss);
  watch(['./src/css/*.*', './src/css/**/*.*'], css);
  watch('./src/js/*', js);
  watch(['./src/images/*', './src/images/**/*'], img);
  watch('./src/*.html', html);
}

// BrowserSync

function browserSync() {
  browsersync.init({
    server: {
      baseDir: './dist'
    },
    notify: false,
    port: 3000
  });
}

// Tasks to define the execution of the functions simultaneously or in series

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(js, css, scss, img, html));
