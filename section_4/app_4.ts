// let && cons
console.log("=== HERE COMES THE LET n CONST ===");
let nuWay: number = 2000; // let is a block-scope variable.
var oldWay: string = "ass"; // var defines a global-scope variable.

const maxLevel: number = 990;
// maxLevel = 5; // This breaks because constants cannot be re-assigned.

// block scope
function reset(): void {
  let nuWay: string = ""
  oldWay += " hole"
  console.log("The local nuWay: " + nuWay + " the global oldWay: " + oldWay);
}

reset()
console.log("The local nuWay: " + nuWay + " the global oldWay: " + oldWay);

// arrow functions
console.log("=== HERE COMES THE => FUNCTIONS ===");
const upcasibilize = (s: string) => s.toUpperCase();
console.log("Upcased word: " + upcasibilize("efmc"));

// with default parameters
const withDefaults = (n: number = 10, t: number = n%3) => console.log("n: " + n + " t: " + t);
withDefaults();

// with rest and spread
const numberees: number[] = [4, -4, 23, 1];
console.log("The maxo': " + Math.max(...numberees)); // Math.max does not work on arrays, the ... spreads.

function makeArray(name: string, ...values: string[]) {
  console.log("For the guy: " + name);
  return values;
}

console.log(makeArray("efmc", "I", " am", " a", " big", " brain!"));

function withTuples(...tuple: [number, string, boolean]) {
  console.log("Is: " + tuple[1] + " a " + tuple[0] + "% big brain?: " + tuple[2]);
}

withTuples(100, "Edison", true);

// with destructuring
const myHs: string[] = ["Being", "a", "big", "brain"];
const [being, a, big, brain] = myHs;

console.log(being, a, big, brain);

let coolData: {humanoid: string, oldness: number} = {humanoid: "Thomas Galla", oldness: 34};
let {humanoid, oldness: age} = coolData;

console.log(humanoid, age);

// with template literals.
let greeting = `===== COOL STUFF ====
  ${humanoid} is a big brain!
  even though he's ${age} already`;

console.log(greeting);
