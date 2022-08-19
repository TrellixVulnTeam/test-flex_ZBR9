import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemap: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <% error.message %>"
            }) 
        ))
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'app.min.js',
            }
        }))
        .pipe(app.path.build.js)
        .pipe(app.plugins.browsersync.stream());
}