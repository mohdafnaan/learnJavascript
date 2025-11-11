// //1.Math.abs() :

console.log(Math.abs(-2)); // 2
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10));//10           


// //2.Math.round() : 

console.log(Math.round(4.5)); // 5
console.log(Math.round(3.4)); // 3
console.log(Math.round(7.8)); // 7

// //3.Math.ceil():

console.log(Math.ceil(5.9)); //5
console.log(Math.ceil(4.1)); //4
console.log(Math.ceil(3.3)); //3

// //4Math.floor() :

console.log(Math.floor(2.1)); // 3
console.log(Math.floor(5.4)); // 6
console.log(Math.floor(8.9)); // 9

// //5.Math.trunc() :

console.log(Math.trunc(2.4534)); // 2
console.log(Math.trunc(5.4)); // 5
console.log(Math.trunc(32.3245)); // 32

// //6. Math.sign() :
console.log(Math.sign(-2)); //-1
console.log(Math.sign(0)); // 0
console.log(Math.sign(34)); // +1


// random numbers printing  :

console.log(Math.random())// gives the numbers between 0 to 1.

console.log(Math.random() * (100 - 1) + 1);// prints the numbers beteween 1 to 100 and includes decimal numbers.

let max = 100;
let min = 1;

let output = (Math.floor( Math.random()* (max - min) + min));
// console.log(output);

let output1 = (Math.floor(Math.random()* (max +1 - min) + min));
console.log(output1); // includes 100
