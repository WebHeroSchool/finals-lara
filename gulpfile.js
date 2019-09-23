const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('build', function () {
    gulp.src(['script/*.js']) 
		.pipe(concat('index.js'))
		.pipe(babel({
		presets: ['@babel/env']
		}))
		.pipe(uglify())
        .pipe(gulp.dest('build')); 
});