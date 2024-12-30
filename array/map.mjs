//[] - array
// value =
// index = index in array always starts from 0
// map syntax - array-name.map((value,index)=>{});
// map function always have return keywords.

// let list = ["a", "b", "c"];
// let output = list.map((value, index) => {
//   return 5;
// });

// console.log(output); //[5,5,5]

//use map method if both input and output are arrays
// and both input and outputs length are same

// input        output
// [1,2,3,4]=>[2,4,6,8]

// let list = [1, 2, 3, 4];
// let output = list.map((value, index) => {
//     return value * 2;
//   let output1 = value * 2;
//   return output1;
// });
// console.log(output);

// [1,2,3,4] => [100,200,300,400]

// let list = [1, 2, 3, 4];
// let next = list.map((value, index) => {
//   return value * 100;
// });
// console.log(next);

//string
// let text = ["my", "name", "is"];
// let output = text.map((value, index) => {
//   let upper = value.toUpperCase();
//   return upper;
// });
// console.log(output);

// [1,3,4,5]=>[100,300,0,500]

// let num = [1, 3, 4, 5, 6];
// let output = num.map((value, index) => {
//   if (value % 2 === 0) {
//     return value * 0;
//   } else {
//     return value * 100;
//   }
// });
// console.log(output);

// let list = ["a", "b", "c", "d"];
// let output = list.map((value, index) => {
//   return `${value} ${index}`; ['a 0','b 1','c 2','d 3']
// });
// console.log(output);

//  ['c','t','a','l'] => ['C','t','a','l']

// let name = ["c", "t", "a", "l"];
// let output = name.map((value, index) => {
//   if (index === 0) {
//     return value.toUpperCase();
//   } else {
//     return value;
//   }
// });
// console.log(output);
