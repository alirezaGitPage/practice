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

// #11 object challenge
const course = {
    title: "Next.js",
    price: 100,
    discount: 30,
    students: ["Ali", "Vahid", "Saheb"],
    isFree: false,
    category: {
        id: 1,
        englishTitle: "Frontend",
        title: "Front-end",
    },
    calcOffPrice: function(){
        this.offPrice = this.price * (1 - this.discount/100);
    }
} ;
course.calcOffPrice();
console.log(course.offPrice);
console.log(course.offPrice);
console.log(course.offPrice);
console.log(course.offPrice);

// #12 factory function challenge
function createCourse(title,price,discount){
    return{
    title,
    price,
    discount,
    calcOffPrice(){
        return price * (1 - discount/100);
    },
    };
}
console.log(createCourse("React.js",200,20).calcOffPrice());

// #13 constructor function challenge
function CreateCourse(title,price,discount){
    this.title = title;
    this.price = price;
    this.discount = discount;
    this.calcOffPrice = function(){
        return price * (1 - discount/100);
    };
}

const course1 = new CreateCourse("React.js", 300, 30);
console.log(course1.title);
console.log(course1.calcOffPrice());
console.log(course1.constructor); // This will show the constructor of the instanced object
console.log(course1 instanceof CreateCourse) // this is a question, Is course1 an instance of CreateCourse func? true.

// #14 build-in constructor challenge
// by this challenge we comprehense that everything in js is an object
const numLit = 200;
const numObj = new Number(200);
console.log(numLit, typeof(numLit));
console.log(numObj, typeof(numObj));

const boolLit = true;
const boolObj = new Boolean(true);
console.log(boolLit, typeof(boolLit));
console.log(boolObj, typeof(boolObj));

const arrLit = ["Ali", 200, false, 1.25];
console.log(arrLit, typeof(arrLit));
const arrObj = new Array(["Ali", 200, false, 1.25]);
console.log(arrObj, typeof(arrObj));
console.log(arrObj.constructor);
console.log(arrObj instanceof Array);
console.log(numObj instanceof Array);

// #15 primitive vs refrence data type
// Primitive
const data = "Ali";
let primitiveCopyData = data;
primitiveCopyData = "Alireza";
console.log(data, primitiveCopyData);
// refrence
const refrenceUser = {
    name : "ali",
    age : 29,
    firends : ["mahsa","hadad"],
};
const copiedRefrenceUser = refrenceUser;
copiedRefrenceUser.name = "alireza";
console.log(refrenceUser, copiedRefrenceUser);
// shallow copy
const shallowCopiedRefrenceUser = Object.assign({},refrenceUser);
shallowCopiedRefrenceUser.name = "fatahi";
shallowCopiedRefrenceUser.firends.push("Shahin");
console.log(refrenceUser, shallowCopiedRefrenceUser);
// deep copy
const deepCopiedRefrenceUser = JSON.parse(JSON.stringify(refrenceUser));
deepCopiedRefrenceUser.name = "alifatahi";
deepCopiedRefrenceUser.firends.push("Shahram");
console.log(refrenceUser, deepCopiedRefrenceUser);