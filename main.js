// #1 : swap a, b Challenge
let a = 20;
let b = 35;
const temp = a;
console.log("a=",a , " b=" , b);
a = b;
b = temp;
console.log("a=",a , " b=" , b);

// #2 number of weeks in our age Challenge
const birthYear = 1995;
const currentYear = 2024;
const myAge = ((currentYear - birthYear) * 365) / 7 ;
console.log(myAge + " weeks of my life was passed...");

// #3 if else Challenge
const role = "ADMIN";
if(role === "ADMIN"){
    console.log("the user role is admin");
}
else if(role === "MERCHANT"){
    console.log("the user role is merchant");
}
else if(role === "TEACHER"){
    console.log("the user role is teacher");
}
else{
    console.log("unknown user role...");
}

// #4 for in Challenge
const user = {
    name : "Ali",
    email : "afatahi201580@gmail.com",
    phoneNumber : "09380464481"
};
for(const key in user){
    console.log(key, ":", user[key]);
}

// #5 for of Challenge
const roles = ["AMDIN", "TEACHER", "MERCHANT"];
for(const item of roles){
    console.log(item);
}

//  #6 function - circle area Challenge
const PI = 3.14;
function calculateArea(radius){
    const area = PI * radius ** 2
    console.log("The Circle area is equal to ", area);
}
calculateArea(10);

// #7 Max and Min Challenge
function specifyMinMax(Num1, Num2){
    if(Num1 > Num2) return "Max is " + Num1 + " and Min is " + Num2;
    if(Num1 < Num2) return "Max is " + Num2 + " and Min is " + Num1;
    else return "the numbers is equal";
}
const result = specifyMinMax(30,30);
console.log(result);

// #8 Shorten above COde challenge
function Max1(a, b){
    if (a>b) return a;
    return b;
}
function Max2(a, b){
    return a>b ? a : b;
}
console.log(Max1(20,10));
console.log(Max2(15,40));

// #9 FizzBuzz challenge
function FizzBuzz(num){
    if (typeof num !== "number") return "Please Enter Number !!!";
    if (num%3===0 && num%5===0) return "FizzBuzz";
    if (num%3===0) return "Fizz";
    if (num%5===0) return "Buzz";
    return "Not FizzBuzz !!!";
}
console.log(FizzBuzz(4));

// #10 Discount Challenge
function calculateDiscount(totalPrice){
    const discountPerPrice = 10;
    const minPrice = 100;
    const discountSteps = 3;
    const maxDiscount = 25;
    if (typeof totalPrice !== "number") return "Please enter a valid price !!!";
    if (totalPrice< minPrice + discountPerPrice) return "No Discount";
    let discount = Math.floor((totalPrice - minPrice) / discountPerPrice) * discountSteps;
    if (discount > maxDiscount) discount=maxDiscount;
    console.log("Applied Discount: " + discount + "%");
    return (totalPrice * discount) / 100;
}
console.log(calculateDiscount(500));
