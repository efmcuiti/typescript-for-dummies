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
let tString: string = "Ass hole"

// With arrays
let as: number[] = [23, 45.5, 324]
