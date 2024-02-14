// #1 : swap a, b
let a = 20;
let b = 35;
const temp = a;
console.log("a=",a , " b=" , b);
a = b;
b = temp;
console.log("a=",a , " b=" , b);

// #2 number of weeks in our age
const birthYear = 1995;
const currentYear = 2024;
const myAge = ((currentYear - birthYear) * 365) / 7 ;
console.log(myAge + " weeks of my life was passed...");