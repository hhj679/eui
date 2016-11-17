var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    resolve: {
        alias: {
          //'react': pathToReact,
          //'react-dom': pathToReactDOM
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
	    loaders: [{
	      test: /\.js?$/,
	      loader: 'babel-loader?presets[]=react,presets[]=es2015',
	      exclude: /(node_modules)/
	    }, {
	      test: /\.css$/, // Only .css files
	      loader: 'style!css' // Run both loaders
	    },{
	      test: /\.(png|jpg|PNG|JPG)$/,
	      loader: 'url?limit=25000'
	    },{
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=10000&minetype=application/font-woff'
	    },{
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader"
		}]
	    //noParse: [pathToReact,pathToReactDOM]
	  }
};