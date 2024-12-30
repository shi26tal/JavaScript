// rest operator and spread operator - syntax =  (...)

//rest operator

// let sum = (a, b, ...c) => {
//   console.log(a); //1
//   console.log(b); //2
//   console.log(c); //3,4,5,6
// };
// sum(1, 2, 3, 4, 5, 6);

//rest operator always place at last parameter

// let [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a);  //1
// console.log(b);  //2
// console.log(c);   //[3,4,5,6]

//spread operator

//spread operator are wrapper opener

// let name = ["ram", "sita", "hari"];
// let num = [1, 2, 3, 4, 5];

// let output = ["n9", ...name, 9, 8, "hi", ...num, "gita"];
// console.log(output); //n9,ram,sita,hari,9,8,hi,1,2,3,4,5,gita

let info = {
  name: "gita",
  age: 21,
  city: "ktm",
};

//rest
let restoutput = { ...info };
console.log(restoutput);

//spread
let spreadoutput = { province: "bagmati", ...info, school: "trinity" };
console.log(spreadoutput);
