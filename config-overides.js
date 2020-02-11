const path = require('path')

module.exports = (config, env) => {
  config.resolve.alias['@'] = path.resolve(__dirname, './src')
  config.resolve.alias['@c'] = path.resolve(__dirname, './src/components')

  return config
}