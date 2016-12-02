# bit-loader-excludes
bit-loader plugin to exclude modules with particular names from being processed.  Primariy use case is for excluding node modules form being processed.

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
