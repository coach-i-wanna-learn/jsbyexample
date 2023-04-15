import(/* webpackChunkName: "async-aa" */ './a');
import(/* webpackChunkName: "async-b" */ './b');
import(/* webpackChunkName: "async-c" */ './c');

function a (a) {
  import(`./h${a}`)
}

a('')

import 'x'
import './import-from-main.1'
import './import-from-main.2'
import 'node_modules-import-from-main.2'