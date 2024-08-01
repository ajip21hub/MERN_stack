const fs = require('fs');
const postcss = require('postcss');
const simplifyCalc = require('./simplify-calc');
const calc = require('postcss-calc');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

// Read the CSS file
const css = fs.readFileSync('frontend/node_modules/@radix-ui/themes/styles.css', 'utf8');

// Process the CSS with PostCSS plugins including the custom simplifyCalc plugin
postcss([simplifyCalc(), postcssPresetEnv({ stage: 1, features: { 'nesting-rules': true } }), calc(), cssnano()])
  .process(css, { from: undefined })
  .then(result => {
    // Ensure the output directory exists
    const outputDir = 'frontend/src';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the processed CSS to a new file in the frontend/src directory
    fs.writeFileSync(`${outputDir}/styles.processed.css`, result.css);
  })
  .catch(error => {
    console.error('Error processing CSS:', error);
  });