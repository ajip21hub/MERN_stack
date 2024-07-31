// postcss.config.js
module.exports = {
    plugins: {
      'postcss-preset-env': {
        stage: 1,
        features: {
          'nesting-rules': true
        }
      },
      'postcss-calc': {}
    }
  };