import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import { webpack as webpackConfig } from '../config'
import runSequence from 'run-sequence'

const $ = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
})

gulp.task('webpack', () => {
    return $.webpack(webpackConfig)
    .pipe(gulp.dest(`${webpackConfig.output.publicPath}`))
})