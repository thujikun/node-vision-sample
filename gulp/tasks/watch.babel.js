import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import { watch } from '../config'
import runSequence from 'run-sequence'

const $ = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
})

gulp.task('watch', () => {
    $.watch([watch.js], () => {
        runSequence('lint:server', 'build-script', 'develop:restart')
    })
    $.watch([watch.html], () => {
        runSequence('develop:restart')
    })
    $.watch([watch.clientJs], () => {
        runSequence('lint:client', 'webpack')
    })
    $.watch([watch.css], () => {
        runSequence('stylus')
    })
})
