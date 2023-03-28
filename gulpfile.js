var gulp = require('gulp'),
    cssmin = require("gulp-cssmin")
    rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./frontend/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(cssmin())
        .pipe(rename({
            // suffix: ".min"
        }))
        .pipe(gulp.dest('./frontend/public/css/'))
        .pipe(browserSync.stream());
    });

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./frontend"
    });

    gulp.watch("./frontend/scss/*.scss", gulp.series('sass'));
    gulp.watch("./frontend/pages/*.html").on('change', browserSync.reload);
});
