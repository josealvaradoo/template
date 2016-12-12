const gulp     = require('gulp');
const pug      = require('gulp-pug');
const less     = require('gulp-less');
const minifyCSS = require('gulp-minify-css'); 

/* -------------------------------------------------------------------------------
*   minifyCSS task minifique css
*  ---------------------------------------------------------------------------- */
gulp.task('minify-css', () =>
    gulp.src('dist/public/css/styles.css')
        .pipe(minifyCSS({ keepBreaks:false }))
        .pipe(gulp.dest('dist/public/css/'))
);

/* -------------------------------------------------------------------------------
*   Less task compiles .less to .css
*  ---------------------------------------------------------------------------- */
gulp.task('less', () =>
    gulp.src('dev/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('dist/public/css/'))
);

/* -------------------------------------------------------------------------------
*   Pug task compiles .pug to .html
*  ---------------------------------------------------------------------------- */
gulp.task('pug', () =>
    gulp.src('dev/views/*.pug')
        .pipe(pug({ pretty:true }))
        .pipe(gulp.dest('dist/'))
);

/* -------------------------------------------------------------------------------
*   Default task listen changes in a folder an execute the pug task
*  ---------------------------------------------------------------------------- */
gulp.task('default', () =>
    gulp.watch('dev/**/**', ['pug','minify-css','less'])
);