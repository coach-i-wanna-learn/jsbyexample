const babel = require('@babel/core');
const jsxToConsoleLogPlugin = require('./jsx');

const code = `
const element = <h1>
<SizedBox {...props} foo="bar">
  <FBackground foo="bar" {...props}>
    <Center {...props}>
      <FText text="Hello" />
    </Center>
  </FBackground>
</SizedBox>
</h1>;
`;

const options = {
  plugins: ['@babel/plugin-syntax-jsx', jsxToConsoleLogPlugin],
};

const result = babel.transformSync(code, options);

console.log(result.code);