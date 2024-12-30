//{scope} - block

// {
//     let a = 10;
//     console.log(a);
// }

{
  //parent block
  let a = 10;
  {
    //child block
    let a = 30;
    console.log(a);
    let b = 20;
  }
  // console.log(b);  //error
}

//
