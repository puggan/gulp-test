"use strict";

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var relativeurls = require('gulp-css-resolve-relative-urls');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var uglifycss = require('gulp-uglifycss');

gulp.task(
	'default',
	() => gulp
		.src(
			[
				"css/b.css",
				"css/h.css"
			]
		)
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(postcss([postcssImport()]))
		.pipe(relativeurls("dist/"))
		.pipe(concat("all.css"))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest("dist/"))
		.pipe(uglifycss())
		.pipe(rename("all.min.css"))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest("dist/"))
);

gulp.task(
	're-uglifycss',
	() => gulp
		.src(
			[
				"dist/all.css"
			]
		)
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglifycss())
		.pipe(rename("all.min.css"))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest("dist/"))
);

