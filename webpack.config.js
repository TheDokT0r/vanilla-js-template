const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ],
    },

    // plugins: [
        // new BundleAnalyzerPlugin()
    // ],

    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        // compress: true,
        port: 3000,
    },
}