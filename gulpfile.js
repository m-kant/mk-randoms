
const gulp      = require('gulp');
// const browserify  = require('browserify');
// const babelify    = require('babelify');
const source    = require('vinyl-source-stream');
const uglify    = require('gulp-uglify');
const uglifyEs  = require('gulp-uglify-es').default;
const rename    = require('gulp-rename');
const concat    = require('gulp-concat');
const del		= require('del');
const babel     = require('gulp-babel');
const pug       = require('gulp-pug');
var gulpDocumentation = require('gulp-documentation');

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
 
gulp.task('demo', () =>
  gulp.src('src/demo.pug')
  .pipe(pug({
    filters : {'md-high': require('./src/markdownit-highlight')}
  }))
   .pipe(rename('index.html'))
   .pipe(gulp.dest('demo'))
);

// Generating a pretty HTML documentation site
gulp.task('doc', function () {
    return gulp.src('./src/random.js')
      .pipe(gulpDocumentation('md',{},{allowEmpty:true}))
      .pipe(gulp.dest('./'));
  });

gulp.task('build', gulp.series( 'clean', gulp.parallel(['build-es5', 'build-es6', 'demo'])));
gulp.task('default', gulp.series('build') );
