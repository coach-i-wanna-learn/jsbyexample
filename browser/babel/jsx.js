const { types: t } = require('@babel/core');

/*
 * 这里我们使用 path.toString(), 查看 path 的前后变化
 */
module.exports = function () {
  return {
    visitor: {
      JSXElement(path) {
        console.log('before: \n', path.toString())

        const openingElement = path.node.openingElement;
        const tagName = openingElement.name.name;

        const message = `Rendering ${tagName}`;

        path.replaceWith(
          t.expressionStatement(
            t.callExpression(
              t.memberExpression(
                t.identifier('console'),
                t.identifier('log')
              ),
              [t.stringLiteral(message)]
            )
          )
        );
        console.log('after: \n', path.toString())
      },
    },
  };
};