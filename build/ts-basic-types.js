// primitive types
var isOk = true;
var greeting = "Hello";
var count = 5;
var fruits = ["banana", "apple"]; // Array<string>
var tuple = ["hi", 10]; // tuple[3] = 1 <- error
var Fruits;
(function (Fruits) {
    Fruits["banana"] = "BANANA";
    Fruits["apple"] = "APPLE";
})(Fruits || (Fruits = {}));
Fruits.apple; // APPLE
var foo = 4;
foo.bar; // doesn't complain :(
var log = function () {
    console.log("Hello");
};
// subtypes: undefined, null, never
var u = undefined;
var n = null;
var a = 4;
a = null; // till --strictNullChecks enabled
function infinite() {
    while (true) { }
}
var infiniteArrow = function () {
    while (true) { }
};
// non-primitive type
function dispatch(options) { }
dispatch({ step: 1 });
dispatch(undefined);
dispatch(null);
dispatch([false]);
dispatch(Fruits);
// dispatch(1);
// dispatch(false);
