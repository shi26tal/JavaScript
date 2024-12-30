//syntax
//  .reduce((previous,current)=>{},initial value);  //returns only one value
// array reduce to only one value

//find the sum of all element
// let num = [1, 2, 3, 4, 5];
// let output = num.reduce((previous, current) => {
//   return previous + current;
// }, 0);
// console.log(output);

//find the sum of all even element
let num = [3, 5, 7, 9, 10, 12];
let output1 = num
  .filter((value, index) => {
    if (value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
  .reduce((pre, cur) => {
    return pre + cur;
  }, 0);
console.log(output1); //22

// let final = output1.reduce((previous, current) => {
//   return previous + current;
// }, 0);

// console.log(final); // 22
