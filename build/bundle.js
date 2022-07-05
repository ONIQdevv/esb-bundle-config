(() => {
  // src/logic.js
  function getName() {
    return "oniq";
  }

  // src/init.js
  var a = 1;
  var b = 8;
  function foo() {
    return 0;
  }
  console.log("Hi everyone ^_^" + a + b + foo() + getName());
})();
