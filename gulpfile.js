var gulp = require('gulp');

gulp.task('build', function () {
    gulp.src(['html/index.html', 'script/index.js']) //Выберем файлы по нужному пути
        .pipe(gulp.dest('new')) //Положим в папку 
});