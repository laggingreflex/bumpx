
# bumpx

Bump version (like [npm-version]) and also create tags like x.x.x

## Install

```
npm i [-g] bumpx
```

## Usage

### CLI

```
bumpx major|minor|patch [--dry]
```

### Node

```js
const bumpX = require('bumpx')
const { version, operations } = bumpX({
  packageJson: 'package.json',
  // or
  version: '1.0.0',
  range: 'major' || 'minor' || 'patch',
})
operations.run({ dry: true })
```


[npm-version]: https://docs.npmjs.com/cli/version

