//set

let num = [2, 3, 4, 2, 3, 4, 5, 4, 3, 1, 2, 1, 3];
let output = [...new Set(num)]; //2,3,4,5,1
console.log(output);

let text = ["a", "b", "e", "a", "e"];
let output1 = [...new Set(text)];
console.log(output1); //a,b,e
