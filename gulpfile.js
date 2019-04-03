const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('build-js', function () {
    gulp.src(['script/*.js']) 
		.pipe(sourcemaps.init())
			.pipe(concat('index.js'))
			.pipe(babel({
			presets: ['@babel/env']
			}))
			.pipe(uglify())
		.pipe(sourcemaps.write())
        .pipe(gulp.dest('build-js')); 
});

gulp.task('build-css', function () {
    gulp.src(['styles/*.css']) 
		.pipe(sourcemaps.init())    
			.pipe(concat('styles.css'))		
			.pipe(cssnano())
		.pipe(sourcemaps.write())
        .pipe(gulp.dest('build-css')); 
});


gulp.task('default', ['build-js','build-css']);