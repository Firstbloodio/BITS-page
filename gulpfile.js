var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: "."
    });
    gulp.run('browserify');
    gulp.watch("./assets/css/*.css").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch('./assets/js/*.**', ['browserify', browserSync.reload]);
    gulp.watch('./assets/data/*.**', ['browserify', browserSync.reload]);

});

gulp.task('browserify', function() {
    return browserify('./assets/js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});
