const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      },
      { test: /\.(eot|png|ttf|svg|woff|woff2)$/, loader: 'url-loader' }
    ]
  }
}
