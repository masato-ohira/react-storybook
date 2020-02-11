const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@c': path.resolve('./src/components'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}
