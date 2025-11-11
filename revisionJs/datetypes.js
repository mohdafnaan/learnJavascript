// 4 ways to print date :

console.log(new Date());

console.log(new Date(598732756657)); // prints the date with totoal milliseconds from jan 1970

console.log(new Date(2006,8,9,21,23,32.323)); // prirnts the date of the entered dates

console.log(new Date("2025-11-11T01:59:44.635Z")); // returns what date we enter in the string.


let currentDate = new Date();

// get miiliseconds of current time
console.log(currentDate.getMilliseconds());

// get full year()
console.log(currentDate.getFullYear());

//get month
console.log(currentDate.getMonth());

//get date 
console.log(currentDate.getDate());

//get day
console.log(currentDate.getDay());

//get hours
console.log(currentDate.getHours());

//get minutes
console.log(currentDate.getMinutes());

//get seconds
console.log(currentDate.getSeconds());

//get milliseconds
console.log(currentDate.getMilliseconds());





// how t get milliseconds till now from 1970;

//1.
console.log(new Date().getTime());

//2.
console.log(Date.now());

//3.
console.log(+new Date());
