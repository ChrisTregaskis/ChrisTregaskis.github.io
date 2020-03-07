var gulp = require('gulp');
var sass = require('gulp-sass');

function sassCompile(cb) {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
    cb();
}

function watch() {
    gulp.watch('app/scss/**/*.scss', sassCompile);
}

exports.sass = sassCompile;
exports.watch = watch;