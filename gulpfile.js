var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

function sassCompile(cb) {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
    cb();
}

function watch() {
    gulp.watch('src/scss/**/*.scss', sassCompile);
}

gulp.task('babel', () =>
    gulp.src('src/js/es6/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('src/js/es5'))
);

exports.sass = sassCompile;
exports.watch = watch;