;(function(){
    'use strict';
    
    var gulp        = require('gulp'),
        browserSync = require('browser-sync'),
        reload      = browserSync.reload,
        sass        = require('gulp-sass'),
        minifyHtml  = require('gulp-minify-html'),
        sourceMaps  = require('gulp-sourcemaps'),
        modRewrite  = require('connect-modrewrite'),
        plumber     = require('gulp-plumber'),
        rev         = require('gulp-rev'),
        revReplace  = require('gulp-rev-replace'),
        rimraf      = require('rimraf'),
        pdf         = require('gulp-html-pdf'),
        rename      = require('gulp-rename'),
        remove      = require('gulp-html-remove');


    // Default task to be run with `gulp`
    gulp.task('default', ['views', 'styles', 'browser-sync'], function () {
        // Watch our scss files
        gulp.watch(['app/main.scss'], [
            'styles'
        ]);

        gulp.watch(['app/index.html'], [
            'views'
        ]);
    });

    // browser-sync task for starting the server.
    gulp.task('browser-sync', function() {
        browserSync({
            server: {
                baseDir: './',
                ghostMode: false,
                middleware: [
                    modRewrite([
                        '!\\.html|\\.js|\\.css|\\.png|\\.woff2|\\.eot|\\.svg|\\.ttf|\\.otf|\\.woff$ /index.html [L]'
                    ])
                ]
            }
        });
    });

    // Styles
    gulp.task('styles', function () {
        return gulp.src('app/main.scss')
            .pipe(sourceMaps.init())
            .pipe(plumber())
            .pipe(sass({
                errorLogToConsole: true
            }))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest('./'))
            .pipe(reload({stream:true}));
    });

    //Views
    gulp.task('views', function() {
        gulp.src('app/index.html')
            .pipe(plumber())
            .pipe(gulp.dest('./'))
            .pipe(reload({stream:true}));
    });

    gulp.task('dist', [ 'dist-styles', 'dist-views', 'to-pdf', 'revreplace'], function() {
        
    });

    gulp.task('dist-styles', function() {
        rimraf('./*.css', function(){});
        gulp.src('app/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rev())
        .pipe(gulp.dest('./'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./'));
    });

    gulp.task('dist-views', function() {
        gulp.src('app/index.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./'));
    });

    gulp.task('revreplace', function() {
        var manifest = gulp.src('./rev-manifest.json');

        return gulp.src('./index.html')
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest('./'));
    });

    gulp.task('to-pdf', function() {
        rimraf('./*.pdf', function(){});
        gulp.src('app/index.html')
        .pipe(remove('#analytics'))
        .pipe(remove('link'))
        .pipe(remove('.pdf'))
        .pipe(pdf())
        .pipe(rename('jamieholliday.pdf'))
        .pipe(gulp.dest('./'));
    });

})();