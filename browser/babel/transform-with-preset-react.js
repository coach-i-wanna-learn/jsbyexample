const babel = require('@babel/core');

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
  presets: [
    [
      '@babel/preset-react',
      {
        pragma: '__createElement',
        pragmaFrag: 'DomFrag',
      },
    ],
  ],
};

const result = babel.transformSync(code, options);

console.log(result.code);

/*
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const element = __createElement("h1", null, __createElement(SizedBox, _extends({}, props, {
  foo: "bar"
}), __createElement(FBackground, _extends({
  foo: "bar"
}, props), __createElement(Center, props, __createElement(FText, {
  text: "Hello"
})))));
*/