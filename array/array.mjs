//split => string to array

//join => array to string

// let name1 = "sita";
// console.log(name1.split("")); //['s','i','t','a']

// let name2 = ["h", "a", "r"];
// console.log(name2.join("")); //har

//filter => true or false

// let arr = ["a", "b", "c"];
// let output = arr.filter((value, index) => {
//   return false; // []
//   return true; // arr dekhauxa
//   if (value === "c") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// filter's output's element must be input element.

// [1,2,3,4,]=>[2,4]

// let num = [1, 2, 3, 4];
// let output = num.filter((value, index) => {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let num = [1, 4, 7, 15, 17, 19, 25, 40];
// let output = num.filter((value, index) => {
//   if (value > 17) {
//     return value;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let name = ["ram", "harry", "soobin"];
// let output = name.filter((value, index) => {
//   if (value.length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let text = ["", "ram", 0, 1, null, undefined, false, true];
// let output = text.filter(Boolean); // true value haru matra dekhayo
// console.log(output);  //ram,1,true
