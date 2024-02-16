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

// #3 if else
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

// #4 for in
const user = {
    name : "Ali",
    email : "afatahi201580@gmail.com",
    phoneNumber : "09380464481"
};
for(const key in user){
    console.log(key, ":", user[key]);
}

// #5 for of
const roles = ["AMDIN", "TEACHER", "MERCHANT"];
for(const item of roles){
    console.log(item);
}

//  #6 function - circle area
const PI = 3.14;
function calculateArea(radius){
    const area = PI * radius ** 2
    console.log("The Circle area is equal to ", area);
}
calculateArea(10);