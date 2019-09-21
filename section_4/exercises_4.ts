// Exercise 1
let double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2
let greet = function (name: string = "Max") {
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3
let numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
let newArray: number[] = [55, 20];
newArray.push(...numbers)
console.log(newArray);

// Exercise 5
let testResults: number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
let scientist: {firstName: string, experience: number} = {firstName: "Will", experience: 12};
let {firstName, experience} = scientist;
console.log(firstName, experience);
