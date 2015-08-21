var gulp = require('gulp'),
    gulpBabel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    babelify = require('babelify'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    reload = browserSync.reload,
    source = require('vinyl-source-stream');

var ENV = {
    DEVELJS: "./devel/js",
    DEVELCSS: "./devel/sass",
    DEVELHTML: "./devel/html"
};

gulp.task("babel", function () {
    return gulp.src(ENV.DEVELJS + "/**/*.js")
        .pipe(gulpBabel())
        .pipe(gulp.dest("./devel/babelified"));
});

gulp.task('browserify', ['babel'], function() {
        browserify({
            entries: './devel/babelified/bootstrap.js',
            debug: true
        })
        .transform(babelify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist'));

    reload();
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(ENV.DEVELCSS + '/**/*.scss', ['sass']);
    gulp.watch(ENV.DEVELJS + '/**/*.js', ['browserify']);
});
