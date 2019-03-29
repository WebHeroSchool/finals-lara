var gulp = require('gulp');

gulp.task('build', function () {
    gulp.src(['html/*.html', 'script/*.js']) //Выберем файлы по нужному пути
        .pipe(gulp.dest('build')) //Положим в папку 
});