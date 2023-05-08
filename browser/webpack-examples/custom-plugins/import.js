
// const insertCode = `import { createElement } from '$render/element';\n`;
module.exports = function(content, map, meta) {
  const { createFunctionName, path } = this.query;
  const insertCode = `import { createElement as ${createFunctionName} } from '${path}';\n`;
  content = insertCode + content;
  return content;
};
