// Define the function receivesAFunction
function receivesAFunction(callback) {
    callback();
  }
  
  // Define the function returnsANamedFunction
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I'm a named function!");
    }
    return namedFunction;
  }
  
  // Define the function returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I'm anonymous!");
    };
  }
  
  // Export the functions (if needed for tests)
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  