const fs = require('fs');
const postcss = require('postcss');
const calc = require('postcss-calc');

// Read the CSS file
const css = fs.readFileSync('frontend/node_modules/@radix-ui/themes/styles.css', 'utf8');

// Process the CSS with postcss-calc
postcss([calc()])
  .process(css, { from: undefined })
  .then(result => {
    // Write the processed CSS to a new file
    const outputDir = 'frontend/src';
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync('frontend/node_modules/@radix-ui/themes/styles.processed.css', result.css);
  })
  .catch(error => {
    console.error('Error processing CSS:', error);
  });