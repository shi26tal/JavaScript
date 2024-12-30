// JSON : javascript object notation

// JSON.Stringify(): converts js object to a json string
//JSON.parse() : converts a json string to a js object

let name = {
  name: "john",
  age: 23,
  city: " new york",
};
let jsonobject = JSON.stringify(name);
console.log(jsonobject); //{"name":"john","age":23,"city":" new york"}

let stringobj = JSON.parse(jsonobject);
console.log(stringobj); //{ name: 'john', age: 23, city: ' new york' }
