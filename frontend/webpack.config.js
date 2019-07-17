var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                // tell babel to read the config from .babelrc
                babelrc: true
            }
        }, {
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract('style-loader!css-loader')
        }],
        rules: [
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            }
          ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}














// const path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//     entry: './src/App.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'],
//         alias: {
//             modules: __dirname + '/node_modules'
//         }
//     },
//     module: {
//         loaders: [{
//             test: /.js[x]?$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//             query: {
//                 // tell babel to read the config from .babelrc
//                 babelrc: true
//             }
//         }, {
//             test: /\.css$/, 
//             loader: ExtractTextPlugin.extract('style-loader!css-loader')
//         }],
//         rules: [
//             {
//               test: /\.css$/,
//               use: [ 'style-loader', 'css-loader' ]
//             }
//           ]
//     },
//     plugins: [
//         new ExtractTextPlugin('styles.css')
//     ]
// }
