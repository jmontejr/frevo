const { src, dest, watch, series, parallel } = require('gulp');
const fileinclude = require('gulp-file-include');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sassGlob = require('gulp-sass-glob');
const composer = require('gulp-uglify/composer');
const uglifyes = require('uglify-es');
const uglify = composer(uglifyes, console);
const browserSync = require('browser-sync').create();
const pathExists = require('path-exists');
const { PATHS, CURRENT_PATH, DEST_PATH } = require('./paths');

// Swallow error
function swallowError(error) {
  console.log(error.toString());
  this.emit('end');
}

// Clean dist
function cleanDist() {
  return src(DEST_PATH)
    .pipe($.clean());
}

// Clear cache
function clearCache(done) {
  return $.cache.clearAll(done);
}

function reload(done) {
  browserSync.reload();
  done();
}

function server(done) {
  browserSync.init({
    server: {
      baseDir: DEST_PATH
    },
  });
  done();
}

// Task functions
function sass() {
  const plugins = [
    autoprefixer(),
    cssnano()
  ];

  return src(PATHS.sass.origin)
    .pipe(sassGlob())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .on('error', swallowError)
    .pipe($.postcss(plugins))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.sourcemaps.write(CURRENT_PATH))
    .pipe(dest(PATHS.sass.dist));
}

function html() {
  return src(PATHS.html.origin)
    .pipe($.replace('##', 'src/app/modules'))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@root'
    }))
  .pipe($.htmlmin({ collapseWhitespace: true }))
  .on('error', swallowError)
  .pipe(dest(PATHS.html.dist));
}

function image() {
  return src(PATHS.images.origin)
    .pipe($.cache($.imagemin([
      $.imagemin.mozjpeg({ quality: 75, progressive: true }),
      $.imagemin.optipng({ optimizationLevel: 5 }),
      $.imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ])))
    .pipe(dest(PATHS.images.dist))
    .on('error', swallowError)
    .pipe($.webp({ quality: 50 }))
    .on('error', swallowError)
    .pipe(dest(PATHS.images.dist));
}

function fonts() {
  return src(PATHS.fonts.origin)
    .pipe(dest(PATHS.fonts.dist));
}

function scripts() {
  return src([
      ...PATHS.libs.origin,
      ...PATHS.plugins.origin,
      ...PATHS.scripts.origin
    ])
    .pipe($.concat('index.js'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .on('error', swallowError)
    .pipe($.sourcemaps.write(CURRENT_PATH))
    .pipe(dest(PATHS.scripts.dist));
}

// Watch files
function watchFiles() {
  watch(PATHS.sass.watch, series(sass, reload));
  watch(PATHS.images.origin, series(image, reload));
  watch([...PATHS.html.include, PATHS.html.origin], series(html, reload));
  watch(PATHS.scripts.origin, series(scripts, reload));
}

// define complex tasks
const clean = series(cleanDist);
const develop = parallel(fonts, sass, image, html, scripts);
const build = () => {
  return pathExists.sync(DEST_PATH) ? series(clean, develop) : develop;
};

// export tasks
module.exports = {
  clean,
  cache: series(clearCache),
  watch: series(watchFiles),
  development: series(develop, server, watchFiles),
  default: develop,
  build: series(clearCache, build())
};
