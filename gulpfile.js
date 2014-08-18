var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean');


gulp.task('styles',function(){
    gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('build/styles/'))
});


gulp.task('scripts',function(){
    gulp.src('src/scripts/**/*.js')
        .pipe(gulp.dest('build/scripts/'));
});


gulp.task('vendor',function(){
    gulp.src('src/vendor/**/*.js')
        .pipe(gulp.dest('build/vendor/'));
});


gulp.task('views',function(){
    gulp.src('src/views/*.html')
        .pipe(gulp.dest('build/views/'));
});


gulp.task('index',function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('build/'));
});


gulp.task('images', function () {
  return gulp.src('src/images/**/*')
//    .pipe($.cache($.imagemin({
//      optimizationLevel: 3,
//      progressive: true,
//      interlaced: true
//    })))
    .pipe(gulp.dest('build/images'))
//    .pipe($.size());
});


gulp.task('clean', function () {
    return gulp.src(['build/'])
        .pipe(clean());
});


gulp.task('watch',function(){
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/views/*.html', ['views']);
    gulp.watch('src/index.html', ['index']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/vendor/**/*.js', ['vendor']);
});


gulp.task('build',['vendor','index','views','styles','scripts','images']);


gulp.task('default', ['clean'], function() {
    gulp.start('build');
});


gulp.task('server',['watch'],function(){
    gulp.src('build/')
        .pipe(webserver({
            fallback: 'index.html',
            port:9000,
            livereload:true
        }));
});