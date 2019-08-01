const path = require('path');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src', 'scripts', 'main.js')],
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jade$/,
        include: path.resolve(__dirname, 'src', 'views'),
        loader: 'raw-loader!jade-html-loader',
      },
    ],
  },
};
