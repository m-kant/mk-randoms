
var gulp        = require('gulp');
// var browserify  = require('browserify');
// var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var uglify      = require('gulp-uglify');
var uglifyEs    = require('gulp-uglify-es').default;
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var del			= require('del');
var babel       = require('gulp-babel');


gulp.task('clean', function(){ return del(['dist/*']); });

gulp.task('build-es5', () =>
    gulp.src(['src/random.js', 'src/footer.es5.js'])
        .pipe(concat('random.js'))
        .pipe(babel({
            presets: ['env'],
        }))
        .pipe(gulp.dest('dist'))
        .pipe(rename('random.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
);

gulp.task('build-es6', () =>
    gulp.src(['src/random.js', 'src/footer.es6.js'])
    .pipe(concat('random.es6.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('random.es6.min.js'))
    .pipe(uglifyEs())
    .pipe(gulp.dest('dist'))
);

gulp.task('build', gulp.series( 'clean', gulp.parallel(['build-es5', 'build-es6'])));
gulp.task('default', gulp.series('build') );
