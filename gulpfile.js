import gulp from 'gulp';
import uglify from 'gulp-uglify';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';

const scss = gulpSass(sass);

const SRC_DIR = './js/**.js';
const DIST_DIR = './dist/';
const SCSS_DIR = './styles/**/*.scss'

async function move(){
    gulp.src(SRC_DIR)
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest(DIST_DIR));
}

async function sassCompilation(){
    gulp.src(SCSS_DIR)
    .pipe(scss())
    .pipe(gulp.dest(DIST_DIR));
}

gulp.task('default', move)
gulp.task('sass-compilation', sassCompilation);