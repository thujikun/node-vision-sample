import gulp from 'gulp'
import server from 'gulp-develop-server'
import {develop as config} from '../config'

gulp.task('develop:start', () => {
    server.listen(config)
})

gulp.task('develop:restart', () => {
    server.restart()
})
