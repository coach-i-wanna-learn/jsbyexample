import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return React.createElement('div', { className: 'app' }, 'Hello, world!');
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);

_.join([1,2,3], [4,5,6]);
console.log(moment.now())