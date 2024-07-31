// postcss.config.js
module.exports = {
    plugins: [
        // PostCSS Preset Env lets you convert modern CSS into something most browsers can understand.
        require('postcss-preset-env')({
          stage: 1, // Enable modern CSS features
          features: {
            'nesting-rules': true // Enable CSS nesting
          }
        }),
        // PostCSS Calc allows you to reduce calc() references when possible
        require('postcss-calc')({
          warnWhenCannotResolve: true, // Warn if any calc() expressions cannot be resolved
          preserve: false // Remove the original calc() expressions
        }),
        // CSSNano is used for minifying the CSS
        require('cssnano')({
          preset: 'default'
        })
      ]
  };