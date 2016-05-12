import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import { css as cssConfig } from '../config'

const $ = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
})

gulp.task('stylus', function () {
    gulp.src(cssConfig.src)
        .pipe($.plumber())
        .pipe($.stylus(cssConfig.stylus))
        .pipe($.pleeease())
        .pipe(gulp.dest(cssConfig.dest))
        .pipe($.livereload());
});
