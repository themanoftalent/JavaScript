var name = "John";
let age = 25;
const PI = 3.14;

// Data Types
// Primitive Data Types
// String
let name = "John";
// Number
let age = 25;
// Boolean
let isMarried = false;
// Null
let car = null;
// Undefined
let test;
// Symbol
let sym = Symbol();

// Reference Data Types
// Array
let hobbies = ["movies", "music"];
// Object literal
let address = {
    city: "Boston",
    state: "MA"
};
// Date
let today = new Date();

// Type Conversion
let val;

// Number to string
val = String(555);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello"); // NaN
val = Number([1, 2, 3]); // NaN

val = parseInt("100.30");
val = parseFloat("100.30");

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

// Type Coercion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);

// Math Object
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;



