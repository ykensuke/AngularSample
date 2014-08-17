var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('server',function(){
    gulp.src('app')
        .pipe(webserver({
            fallback: 'index.html',
            port:9000,
            livereload:true
        }));
});

//gulp.task('init',function(){
//    gulp.src('bower_components/angular/angular.min.js')
//        .pipe(gulp.dest('app/js/'));
//})

//gulp.task('default',['webserver']);


//gulp server
//gulp build
//dulp test