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
car = {brand: "Mercedez-Benz" line: 200};
console.log(car);
