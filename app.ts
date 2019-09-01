console.log("It fucking works!!");

// String
let myString = "A string";
// myString = 2; // -> This produces an error (cannot assign number to string)

// Anonymous type
let anon; // also equivalent to: let anon: any;

anon = 34.3;
console.log("Anon as number: " + anon);
anon = "Ass";
console.log("Anon as string: " + anon);

// Explicitly declared vars
let tNumber: number;
let tString: string = "Ass hole";

// With arrays
let as: number[] = [23, 45.5, 324];

// With tuples
let address: [string, number] = ["Supastreet", 99];
console.log("Tuple's value: " + address);

// With enums
enum Color {
  Gray,
  Red = 100,
  Blue
};

let myColor: Color = Color.Red;
console.log("My enumerated color: " + myColor);

// With any
let car: any = "BMW";
console.log(car);
car = {brand: "Mercedez-Benz", line: 200};
console.log(car);

// With functions
let myName: string = "Pro-Master";
function returnMyName(): string {
  return myName;
}
console.log("Typed function: " + returnMyName());

// -> void
function myVoid(): void {
  console.log("This is a void-return function");
  // return "ass"; // This makes the compiler to error out."
}

// With arguments
function funnyMultiply(x: number, y: number): number {
  return x*y;
}
// console.log("Funny multiply: " + funnyMultiply("a", 5)); // This makes the code to break.
console.log("With a typed arguments function: " + funnyMultiply(1234, 1.4));

// With function types
let ownMultiply: (v1: number, v2: number) => number; // only functions receiving two numbers and returning a number).
ownMultiply = funnyMultiply;
console.log("With function types: " + ownMultiply(2, 3));

// With objects
let userData: { name: string, age: number } = {
  name: "Thomas",
  age: 34
};

// userData = {}; // this makes it to break because it does not match against the typed blueprint.
