let list = ["a", "b", "c", "d"];
let output = list.slice(1);
console.log(output); //[b,c,d]

let output1 = list.slice(1, 3);
console.log(output1); //[b,c]

//last index gives value of index - 1
//if we dont give second value it will give all the values from first index to last index
