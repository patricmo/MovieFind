var gulp = require('gulp')
var browserify = require('browserify')
var reactify = require('reactify')
var source = require('vinyl-source-stream')

gulp.task('browserify', function(){
    return browserify('./src/js/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('copy', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'))
    
    return gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'))
        
})

gulp.task('default',  function(){
    return gulp.watch('src/**/*.*', gulp.series('browserify', 'copy'))
})