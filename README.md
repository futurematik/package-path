# @fmtk/package-path

Get information about the package path.

## Quick start

In your module, add the following code:

```typescript
import { getModulePath } from '@fmtk/package-path';

export const source = getModulePath();

export function foo() {
  console.log('hello world');
}
```

In your dependent module, reference the function like this:

```typescript
// import the module from above
import * as mymodule from 'mymodule';

// the 'foo' argument is type-checked
const handler = getHandler(mymodule, 'foo');
```

```javascript
handler = {
  code: '/path/to/node_modules/mymodule/',
  handler: 'lib/filename.foo',
};
```
