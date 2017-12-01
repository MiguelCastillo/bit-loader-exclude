# bit-loader-excludes

[![Greenkeeper badge](https://badges.greenkeeper.io/MiguelCastillo/bit-loader-excludes.svg)](https://greenkeeper.io/)
Plugin for specifying *module names* to be replaced with empty stub modules.  Primary use case is for replacing node modules with empty ones.

## compatible with

- [bit-bundler](https://github.com/MiguelCastillo/bit-bundler)


# usage

``` javascript
var Bitbundler = require("bit-bundler");
var excludesPlugin = require("bit-loader-excludes");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      excludesPlugin(["node-fetch"])
    ]
  }
});
```
