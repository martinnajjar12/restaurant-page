module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js'
  }
  // module: {
  //   loader: [
  //     {
  //       test: /\.css$/,
  //       "loader": "style-loader!css-loader"
  //     },
  //     {
  //       test: /\.js$/,
  //       loader: 'babel-loader',
  //       exclude: /node_modules/,
  //       query: {
  //         presets: ['es2015']
  //       }
  //     }
  //   ]
  // }
}