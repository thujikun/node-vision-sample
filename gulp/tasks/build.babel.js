import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import notifier from 'node-notifier'
import config from '../config'
import runSequence from 'run-sequence'

const $ = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
})
const errorNotification = (error) => {
    notifier.notify({
        message: error.message,
        title: error.plugin,
        sound: 'Glass'
    })
}

gulp.task('build-script', () => {
    return gulp.src(`${config.src}/**`)
    .pipe($.plumber({ errorHandler: errorNotification }))
    .pipe($.babel())
    .pipe(gulp.dest(config.dest))
})

gulp.task('build', () => {
    runSequence(['lint:server', 'lint:client'], ['build-script', 'webpack', 'stylus'])
})