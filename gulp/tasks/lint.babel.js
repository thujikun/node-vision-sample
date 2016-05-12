import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import notifier from 'node-notifier'
import lint from 'gulp-eslint'
import config from '../config'

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

gulp.task('lint:server', () => {
    return gulp.src([`${config.src}/**/*.js`])
    .pipe(lint(config.lint.path))
    .pipe($.plumber({ errorHandler: errorNotification }))
    .pipe(lint.format())
    .pipe(lint.failOnError())
})
gulp.task('lint:client', () => {
    return gulp.src([`${config.client}/js/**/*.js`])
    .pipe(lint(config.lint.path))
    .pipe($.plumber({ errorHandler: errorNotification }))
    .pipe(lint.format())
    .pipe(lint.failOnError())
})