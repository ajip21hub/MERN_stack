module.exports = () => {
    return {
      postcssPlugin: 'simplify-calc',
      Once(root) {
        root.walkDecls(decl => {
          if (decl.value.includes('calc(')) {
            decl.value = decl.value.replace(/calc\(([^()]*)\)/g, (match, expression) => {
              // Simplify nested calc() by removing inner calc()
              let simplified = expression.replace(/calc\(([^()]*)\)/g, '$1');
              // Further simplify complex expressions if needed
              simplified = simplified.replace(/(\d+)em \* (\d+)/g, (match, p1, p2) => {
                return `${p1 * p2}em`;
              });
              return `calc(${simplified})`;
            });
          }
        });
      }
    };
  };
  module.exports.postcss = true;