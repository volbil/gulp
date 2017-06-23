var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify');

gulp.task('clean', function () {
	return del.sync('dist');
});

gulp.task('less', function () {
  return gulp.src('app/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }).on("error", notify.onError()))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('libs', function () {
  return gulp.src('app/libs/css/*.css')
  	.pipe(cssnano())
  	.pipe(concat('libs.min.css'))
    .pipe(gulp.dest('app/css'));
});

gulp.task('img', function() {
    return gulp.src([
		'!app/img/src',
		'!app/img/**/*.xcf',
		'app/img/**/*'
	])
    .pipe(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('scripts', function () {
  return gulp.src([
  		'!app/js/main.js',
  		'app/libs/js/jquery.min.js',
  		'app/libs/js/**/*.js'
  	])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('browser-sync', function () {
	browserSync({
		server:{
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'less', 'libs', 'scripts'], function () {
	gulp.watch('app/less/**/*.less', ['less']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img'], function () {

	var buildCss = gulp.src('app/css/**/*.css')
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*.js')
	.pipe(gulp.dest('dist/js'));

	var buildIndex = gulp.src('app/*.html')
	.pipe(gulp.dest('dist/'));

});