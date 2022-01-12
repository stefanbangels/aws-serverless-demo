const path = require('path')

module.exports = ['api'].map((lambda) => ({
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  entry: [
    path.join(__dirname, `src/${lambda}.js`)
  ],
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist'),
    filename: `${lambda}-bundle.js`
  },
  target: 'node',
  devtool: 'nosources-source-map'
}))
