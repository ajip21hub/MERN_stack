module.exports = {
  plugins: [
    require('./simplify-calc'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true
      }
    }),
    require('postcss-calc')({
      warnWhenCannotResolve: true,
      preserve: false
    }),
    require('cssnano')({
      preset: 'default'
    })
  ]
};