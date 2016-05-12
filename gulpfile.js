var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');

gulp.task('http-server', function() {
	return connect.server({
		root: ['./'],
		port: 8080,
		livereload: true
	});
});

gulp.task('open', ['http-server'], function() {
	gulp.src('')
		.pipe(open({
			uri: 'http://localhost:8080/meetings.html',
			app: 'chrome'
		}));
});

gulp.task('default', ['open'], function() {
	// default task...
});










// var gulp = require('gulp'),
// 	gutil = require('gulp-util'),
// 	connect = require('gulp-connect'),
// 	open = require('gulp-open'),
// 	path = require('path');

// // Note: PHP 5.4.0+ comes with a built in web-server
// // which can be run from th command line using "php -S localhost:8000" for example

// // Config
// var config = {	
// 	uri: "http://localhost",
// 	port: 8000,
// 	app: "chrome"
// }

// // Start local server
// gulp.task('http-server', function(){
// 	 return connect.server({
// 		root: ['../', './'], // including ../ allows access to the parent directory also (GitHub)
// 		port: config.port,
// 		livereload: true
// 	});
// });

// // Open in browser
// gulp.task('open', ['http-server'], function(){
// 	gulp.src('')
// 	.pipe(open({
// 		uri: config.uri + ":" + config.port + "/",
// 		app: config.app
// 	}));
// });

// // Watch for changes
// // Note: This can only watch for changes to files that exist when
// // Gulp is invoked
// var watchPaths = ['./angular/**/*.html', './angular/**/*.js']
// gulp.task('watch', [], function(){	
// 	// gulp.watch(['./**/*.html', './**/*.js'], ['reload']);
// 	// gulp.watch(['./**/*.html', './**/*.js']).on('change', function(ev){
// 	// 	var filename = path.basename(ev.path);
// 	// 	fileChangeHandler(ev, filename);
// 	// });
//     gulp.watch(watchPaths, ['reload']);
// 	gulp.watch(watchPaths).on('change', function(ev){
// 		var filename = path.basename(ev.path);
// 		fileChangeHandler(ev, filename);
// 	});
// });

// // Reload when file changes are detected
// gulp.task('reload', [], function(){
// 	gulp.src('')
// 	.pipe(connect.reload());
// });

// // Output file changes to console
// var fileChangeHandler = function(ev, filename){
// 	evBgColor = "bgCyan";
// 	evColor = "black";
// 	if( ev.type == "deleted" ){
// 		evBgColor = "bgRed";
// 		evColor = "white";
// 	}
// 	gutil.log(gutil.colors.bgMagenta(" " + filename + " ") + " was " + gutil.colors[evBgColor][evColor](" " + ev.type + " "));
// 	gutil.log(gutil.colors.gray("Full Path: " + ev.path));
// }

// // Default
// gulp.task('default', ['open', 'watch'], function(){
// 	// default task...
// 	setTimeout(function(){
// 		gutil.log(gutil.colors.red("REMEMBER TO SET THE watchPaths variable!!!"));	
// 	}, 2000);
	
// });