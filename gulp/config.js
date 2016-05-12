const webpack = require('webpack')
module.exports = {
    src: './src',
    dest: './lib',
    develop: {
        path: 'lib/index.js',
        env: {
            NODE_ENV: 'development',
            DEBUG: 'koa*'
        }
    },
    lint: {
        path: './.eslintrc'
    },
    watch: {
        js: './src/**',
        html: './views/**',
        clientJs: './client/js/**',
        css: './client/styl/**'
    },
    webpack: {
        entry: {
            index: './client/js/index.js',
        },
        output: {
            publicPath: 'dist/js',
            path: `${process.cwd()}dist/js`,
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js'],
            root: [
                './client',
            ]
        },
        plugins: [
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: ['babel-loader']
                },
                {
                    test: /\.html$/,
                    loader: 'html?minimize'
                },
            ]
        }
    },
    css: {
        src: [
            './client/styl/**/*.styl',
            '!./client/styl/**/_*.styl'
        ],
        dest: './dist/css/',
        stylus: {
            use: [require('nib')()]
        }
    },
}
