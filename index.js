module.exports = function(options) {
  options = options || [];

  function preresolve(mod) {
    if (options.indexOf(mod.name) !== -1) {
      return {
        path: "@excluded",
        source: ""
      };
    }
  }

  return function(builder) {
    return builder
      .configure(options)
      .configure({ preresolve: preresolve });
  };
}
