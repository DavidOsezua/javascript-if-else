/*  QUESTION 1. 
Write a program that asks the user to enter a length in centimeters. If the user enters a negative length, the program should tell the user that the entry is invalid. Otherwise, the program
should convert the length to inches and print out the result. There are 2.54 centimeters in an
inch
*/

// SOLUTION
// let user = prompt("enter a length in cm");
// user = parseInt(user);

// if (user < 0) {
//   console.log(`${user} is invalid`);
// } else {
//   console.log(`${user / 2.54} inch`);
// }

/* 2. Ask the user for a temperature. Then ask them what units, Celsius or Fahrenheit, the temperature is in. Your program should convert the temperature to the other unit. The conversions
are F =9/5C + 32 and C =5/9(F − 32).
*/

// SOLUTION
// let user = prompt("enter a temp");
// user = parseInt(user);
// let unit = prompt("enter Celsius or Fahrenheit");

// if (unit === "Celsius") {
//   console.log(`${(9 / 5) * (user + 32)}Fahrenheit`);
// } else {
//   console.log(`${(5 / 9) * (user - 32)}Celsius`);
// }

/* QUESTION 5. 
Generate a random number between 1 and 10. Ask the user to guess the number and print a message based on whether they get it right or not.*/

//SOLUTION
// function randint(x, y) {
//   let result = Math.floor(Math.random() * (y - x + 1)) + x;
//   return result;
// }

// let randm = randint(1, 10);
// let guess = prompt("enter your Guess");
// guess = parseInt(guess);

// if (guess === randm) {
//   console.log("you Got it right");
// } else {
//   console.log("you got it wrong");
//   console.log(`The correct answer is ${randm}`);
// }

/* QUESTION 7. 
Write a program that asks the user for two numbers and prints Close if the numbers are within .001 of each other and Not close otherwise.
*/

// SOLUTION
// let x = prompt("enter number");
// let y = prompt("enter number");

// if (y >= x - 1 && y <= x) {
//   console.log("close");
// } else if (y <= x + 1 && y >= x) {
//   console.log("close");
// } else {
//   console.log("Not close");
// }

// function fakeBin(x) {
//   const xArray = x.split("");
//   for (let i = 0; i < xArray.length; i++) {
//     if (xArray[i] < 5) {
//       xArray[i] = "0";
//     } else {
//       xArray[i] = "1";
//     }
//   }
//   return xArray.join("");
// }

// const s = fakeBin("245465754234256");
// console.log(s);

// let john = {
//   fullName: "John Smith",
//   mass: 78,
//   height: 1.65,
//   calBmi: function calBmi() {
//     this.johnBmi = this.mass / this.height ** 2;
//     return this.johnBmi;
//   },
// };
// let mark = {
//   fullName: "Mark Miller",
//   mass: 98,
//   height: 1.95,
//   calBmi: function calBmi() {
//     this.markBmi = this.mass / this.height ** 2;
//     return this.markBmi;
//   },
// };
// john.calBmi();
// mark.calBmi();
// console.log(john, mark);

// if (mark.markBmi > john.johnBmi) {
//   console.log(`${mark.fullName} has the highest BMI`);
// } else if (mark.markBmi < john.johnBmi) {
//   console.log(`${john.fullName} has the highest BMI`);
// } else {
//   console.log(`${mark.fullName} and  ${john.fullName} has the same BMI`);
// }
// if (mark.calBmi() > john.calBmi()) {
//   console.log(`${mark.fullName} has the highest BMI`);
// } else if (mark.calBmi() < john.calBmi()) {
//   console.log(`${john.fullName} has the highest BMI`);
// } else {
//   console.log(`${mark.fullName} and  ${john.fullName} has the same BMI`);
// }

/* ************** For John ********** */
// let john = {
//   fullName: "John Smith",
//   billArr: [124, 48, 268, 180, 42],
//   calTip: function calTip() {
//     let percentage;
//     this.tipsArr = [];
//     this.finalAmt = [];

//     // looping through the billArr

//     for (let i = 0; i < this.billArr.length; i++) {
//       if (this.billArr[i] < 50) {
//         percentage = 0.2 * this.billArr[i];
//       } else if (this.billArr[i] >= 50 && this.billArr[i] <= 200) {
//         percentage = 0.15 * this.billArr[i];
//       } else {
//         percentage = 0.1 * this.billArr[i];
//       }
//       this.tipsArr[i] = percentage;
//       this.finalAmt[i] = percentage + this.billArr[i];
//     }
//   },
// };

// john.calTip();
// console.log(john);

// /* ************** For Mark ********** */
// let mark = {
//   fullName: "Mark Miller",
//   billArr: [77, 375, 110, 45],
//   calTip: function calTip() {
//     let percentage;
//     this.tipsArr = [];
//     this.finalAmt = [];

//     // looping through the billArr

//     for (let i = 0; i < this.billArr.length; i++) {
//       if (this.billArr[i] < 100) {
//         percentage = 0.2 * this.billArr[i];
//       } else if (this.billArr[i] >= 100 && this.billArr[i] <= 300) {
//         percentage = 0.1 * this.billArr[i];
//       } else {
//         percentage = 0.25 * this.billArr[i];
//       }
//       this.tipsArr[i] = percentage;
//       this.finalAmt[i] = percentage + this.billArr[i];
//     }
//   },
// };

// mark.calTip();
// console.log(mark);

// function avg(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// let johnFamilyAvg = avg(john.tipsArr);
// let markFamilyAvg = avg(mark.tipsArr);

// if (johnFamilyAvg > markFamilyAvg) {
//   console.log(`John's family has the highest average`);
// } else if (johnFamilyAvg < markFamilyAvg) {
//   console.log(`Mark's family has the highest average`);
// } else {
//   console.log(`They have the same score`);
// }

// let x = "23";

let str = "hello David";
let strArr = str.split("");
let newArr = [];
let newAry = [];

for (let i = strArr.length - 1; i >= 0; i--) {
  newArr.push(strArr[i]);
}

console.log(newArr);
