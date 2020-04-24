// primitive types
let isOk: boolean = true;
let greeting: string = "Hello";
let count: number = 5;
let fruits: string[] = ["banana", "apple"]; // Array<string>
let tuple: [string, number] = ["hi", 10]; // tuple[3] = 1 <- error

enum Fruits {
  banana = "BANANA",
  apple = "APPLE",
}
Fruits.apple; // APPLE

let foo: any = 4;
foo.bar; // doesn't complain :(

const log = (): void => {
  console.log("Hello");
};

// subtypes: undefined, null, never
let u: undefined = undefined;
let n: null = null;

let a: number = 4;
a = null; // till --strictNullChecks enabled

function infinite(): never {
  while (true) {}
}
const infiniteArrow = (): never => {
  while (true) {}
};

// non-primitive type
function dispatch(options: object) {}

dispatch({ step: 1 });
dispatch(undefined);
dispatch(null);
dispatch([false]);
dispatch(Fruits);
// dispatch(1);
// dispatch(false);
