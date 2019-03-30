const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');


gulp.task('build-js', function () {
    gulp.src(['script/*.js']) 
		.pipe(concat('index.js'))

		.pipe(babel({
		presets: ['@babel/env']
		}))
		.pipe(uglify())
        .pipe(gulp.dest('build-js')); 
});

gulp.task('build-css', function () {
    gulp.src(['styles/*.css']) 
		.pipe(concat('styles.css'))		
		// .pipe(babel({
		// presets: ['@babel/env']
		// }))
		.pipe(cssnano())
        .pipe(gulp.dest('build-css')); 
});


gulp.task('build', ['build-js','build-css']);