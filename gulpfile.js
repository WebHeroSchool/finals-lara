const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('build', function () {
    gulp.src(['script/index.js']) 
	    .pipe(babel({
			presets: ['@babel/env']
		}))
        .pipe(gulp.dest('build')) 
});