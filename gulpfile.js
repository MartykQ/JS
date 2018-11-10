var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('hello', function() {
    console.log('Hello world');
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});