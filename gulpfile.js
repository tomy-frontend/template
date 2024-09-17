// gulpを読み込む
const gulp = require("gulp");

// インストールしたパッケージを読み込む
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const mmq = require("gulp-merge-media-queries");
const browserSync = require("browser-sync").create();
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const htmlBeautify = require("gulp-html-beautify");

// ファイルパスの定数
const paths = {
  sass: "./src/assets/sass/**/*.scss",
  js: "./src/assets/js/**/*.js",
  html: "./src/**/*.html",
  img: "./src/assets/img/**/*",
  cssDest: "./public/assets/css/",
  jsDest: "./public/assets/js/",
  imgDest: "./public/assets/img/",
  htmlDest: "./public",
};

// sassをコンパイルするための記述
function compileSass() {
  return gulp
    .src(paths.sass)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssSorter()]))
    .pipe(mmq())
    .pipe(gulp.dest(paths.cssDest))
    .pipe(cleanCss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.cssDest));
}

// watchでファイルの更新があれば自動コンパイルされるようにする
// ./src/**/*.scssを監視して、変更があればcompileSassを実行するような処理
// ターミナルコマンドは npx gulp watch
// watchでファイルの更新があれば自動コンパイル
function watch() {
  gulp.watch(paths.sass, gulp.series(compileSass, browserReload));
  gulp.watch(paths.js, gulp.series(copyJs, browserReload));
  gulp.watch(paths.img, gulp.series(copyImage, browserReload));
  gulp.watch(paths.html, gulp.series(formatHTML, browserReload));
}

// ブラウザを立ち上げる処理
// publicの中のindex.htmlを立ち上げる
function browserInit(done) {
  browserSync.init({
    server: {
      baseDir: "./public/",
      startPath: "public/index.html",
    },
  });
  done();
}

// ブラウザをリロードする処理
function browserReload(done) {
  browserSync.reload();
  done();
}

// JavaScriptファイルを圧縮してpublicフォルダにコピー
function copyJs() {
  return gulp
    .src(paths.js)
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.jsDest));
}

// htmlファイルのフォーマット
function formatHTML() {
  return gulp
    .src(paths.html)
    .pipe(
      htmlBeautify({
        indent_size: 2,
        indent_with_tabs: true,
      })
    )
    .pipe(gulp.dest(paths.htmlDest));
}

// imgフォルダをpublicにコピー
function copyImage() {
  return gulp.src(paths.img).pipe(gulp.dest(paths.imgDest));
}

// functionで作成した処理を実行する
exports.compileSass = compileSass;
exports.watch = watch;
exports.browserInit = browserInit;
exports.copyJs = copyJs;
exports.formatHTML = formatHTML;
exports.copyImage = copyImage;

// 開発に必要な処理を立ち上げる記述
// ターミナルコマンドnpx gulp dev
exports.dev = gulp.parallel(browserInit, watch);

// 全部の処理を並列で処理する記述、初回のみ使用
// ターミナルコマンド npm install(初回のみ)
// ターミナルコマンド npx gulp build
exports.build = gulp.parallel(formatHTML, copyJs, compileSass, copyImage);
