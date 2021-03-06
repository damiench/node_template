var HtmlWebpackPlugin = require('html-webpack-plugin');
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
				collapseWhitespace: true
			},
			inject: true
		}),
        new webpack.HotModuleReplacementPlugin(),

    ],
    devServer: {
        contentBase: path.join(__dirname, "./build/client"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    }
};
