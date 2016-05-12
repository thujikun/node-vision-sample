import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('serve', () => {
    runSequence(['develop:start', 'webpack', 'stylus', 'watch'])
})
