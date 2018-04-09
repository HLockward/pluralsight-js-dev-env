// this file is not transpiled, so must used CommonJS and ES5

//Registe babel to transpile before our test run
require('babel-register')();

//Disable webpack features that Mocha does not understand.
require.extensions['.css'] = function(){};

