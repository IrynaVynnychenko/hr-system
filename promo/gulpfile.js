// подключение галп плагинов
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  autoprefixer = require("gulp-autoprefixer"),
  minifyCss = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  pug = require("gulp-pug"),
  htmlmin = require("gulp-htmlmin"),
  clean = require("gulp-clean"),
  image = require("gulp-image"),
  replace = require("gulp-replace"),
  connect = require("gulp-connect"),
  babel = require("gulp-babel"),
  fs = require("fs"),
  rename = require("gulp-rename");

// complex tasks

gulp.task("image-min", () =>
  gulp
    .src([
      "./src/image/*",
      "./src/views/**/*.svg",
      "./src/views/**/*.png",
      "./src/views/**/*.jpg",
    ])
    .pipe(image())
    .pipe(rename({ dirname: "" }))
    .pipe(gulp.dest("./dist/image"))
    .pipe(connect.reload())
);

gulp.task("sass", function () {
  return gulp
    .src([
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      // "node_modules/perfect-scrollbar/css/perfect-scrollbar.css",
      // "node_modules/owl.carousel/dist/assets/owl.carousel.css",
      // "node_modules/owl.carousel/dist/assets/owl.theme.default.css",
      "node_modules/vanilla-js-dropdown/vanilla-js-dropdown.css",
      "node_modules/slick-slider/slick/slick.css",
      "node_modules/slick-slider/slick/slick-theme.css",
      // "node_modules/flatpickr/dist/flatpickr.min.css",
      "./src/scss/*.scss",
      "./src/views/**/*.scss",
    ])
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(concat("style.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browserSync.stream());
});

gulp.task("views", function () {
  return (
    gulp
      .src(["./src/views/*.pug"])
      .pipe(pug({ pretty: true }))
      // .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("./dist/"))
  );
});

gulp.task("scripts", function () {
  return gulp
    .src([
      "node_modules/jquery/dist/jquery.min.js",
      // "node_modules/owl.carousel/dist/owl.carousel.min.js",
      // "node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/inputmask/dist/jquery.inputmask.min.js",
      "node_modules/slick-slider/slick/slick.min.js",
      // "node_modules/flatpickr/dist/flatpickr.min.js",
      // "node_modules/vue/dist/vue.min.js",
      // "node_modules/flatpickr/dist/l10n/ru.js",

      "./src/js/common.min.js",
    ])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./dist/js/"));
});

gulp.task("minify-main-js", function () {
  return gulp
    .src(["./src/js/common.js", "./src/views/**/*.js"])
    .pipe(
      babel({
        presets: ["env"],
      })
    )
    .pipe(uglify())
    .pipe(concat("common.min.js"))
    .pipe(gulp.dest("./src/js/"));
});

gulp.task("copy-fonts", function () {
  return gulp.src(["./src/fonts/*"]).pipe(gulp.dest("./dist/fonts/"));
});

// Чистим директорию назначения и делаем ребилд, чтобы удаленные из проекта файлы не остались
gulp.task("clean-js", function () {
  return gulp
    .src(["./src/js/common.min.js"], { read: false, allowEmpty: true })
    .pipe(clean());
});

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist/",
    },
  });
  gulp.watch("./src/scss/*.scss", gulp.series(["sass"]));
  gulp.watch("./src/views/**/*.scss", gulp.series(["sass"]));
  gulp
    .watch("./src/views/**/*.pug", gulp.series(["views"]))
    .on("change", browserSync.reload);
  gulp
    .watch(
      ["./src/js/common.js", "./src/js/vanilla-js-dropdown.js"],
      gulp.series(["clean-js", "minify-main-js", "scripts", "clean-js"])
    )
    .on("change", browserSync.reload);
  gulp
    .watch(
      [
        "./src/image/*",
        "./src/views/**/*.svg",
        "./src/views/**/*.png",
        "./src/views/**/*.jpg",
      ],
      gulp.series(["image-min"])
    )
    .on("change", browserSync.reload);
});

const build = gulp.series(
  "image-min",
  "sass",
  "views",
  "clean-js",
  "minify-main-js",
  "scripts",
  "clean-js",
  "copy-fonts"
);

exports.build = build;
exports.dev = gulp.series(build, "server");

// exports.deploy = deploy;
exports.default = gulp.series("server");
