To understand when webpack will concatenate modules, we need to first understand what concatenateModules does. According to the webpack documentation, concatenateModules is a flag that enables scope hoisting and module concatenation.

Module concatenation is the process of combining multiple modules into a single module. This can happen when webpack detects that two or more modules have no dependencies on other modules and can be safely combined without affecting the functionality of the application.

Here's an example of when module concatenation might occur:

Suppose we have two modules, moduleA.js and moduleB.js, both of which export a single function. moduleA.js looks like this:

export function foo() {
  console.log('Hello from module A!');
}
And moduleB.js looks like this:

export function bar() {
  console.log('Hello from module B!');
}
Now suppose we have a third module, app.js, that imports both foo and bar:

import { foo } from './moduleA.js';
import { bar } from './moduleB.js';

foo();
bar();
If webpack determines that moduleA.js and moduleB.js have no dependencies on other modules, it may decide to concatenate them into a single module. The resulting module would look something like this:

function foo() {
  console.log('Hello from module A!');
}

function bar() {
  console.log('Hello from module B!');
}

foo();
bar();
Note that the import statements have been removed and the foo and bar functions have been combined into a single module. This can result in faster load times and a smaller bundle size.

I hope this helps answer your question! Let me know if you have any further questions.

==

To determine which modules are eligible for concatenation, the ModuleConcatenationPlugin applies a set of rules to each module. If a module fails any of these rules, it is not eligible for concatenation.

The rules are as follows:

The module must not be an async module.
The module must be in strict mode.
The module must be in at least one chunk.
The module must have a static list of exports.
The module must not be an entry point.
If a module passes all of these rules, it is considered a potential root module. The plugin then sorts the potential root modules by depth, with modules of lower depth being more likely to be suited as roots.

For example, if you have a module foo.js that exports a static list of exports and is not an async module, and it is included in at least one chunk, it may be eligible for concatenation. However, if foo.js is also an entry point or is not in strict mode, it would not be eligible.