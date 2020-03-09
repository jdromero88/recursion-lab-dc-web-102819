// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  }
  return true;
}

function reverseString(string){
  // sol 1 no recursion
  // let sToA = string.split('').reverse().joint('')
  // sToA.reverse()
  // return sToA.join('')
  // sol 2 no recursion
  // let newVar = ''
  // // let stringToArray = string.split('')
  // // debugger
  // for (var i = string.length -1; i >= 0; i--) {
  //   // debugger
  //   console.log(string[i]);
  //   newVar += string[i]
  // }
  // return newVar
  // sol 3 recursion
  if(string.length !== 0){
      return reverseString(string.substring(1)) + string.charAt(0)
  } else {
      return ''
  }
}
