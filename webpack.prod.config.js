var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/client/index.tsx",
    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: __dirname + "/build/client"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // Set target as browser
    target: 'web',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            // All css/sass files will be bundled
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: { sourceMap: true }},
                    {loader: 'sass-loader', options: { sourceMap: true }}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: './src/client/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
			},
			inject: true
		}),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            noInfo: true, // set to false to see a list of every file being bundled.
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, 'src/client', 'scss')]
                },
                context: '/',
                postcss: () => [autoprefixer],
            }
        }),
        new WebpackMd5Hash()
    ]
};
