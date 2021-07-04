var arr=[4,5,9,6]
var arr2=[5,6,3,6]

//console.log(arr.join(' | '))//output=4 | 5 | 9 | 6
//arr.fill(0)  //output=0 0 0 0 sob gulu 0 hoye jabe , method er moddhe ja dibo , output tai print hbe 
//console.log(arr)
//marge function
var arr3=arr.concat(arr2)
console.log(arr3)
//console.log(Array.isArray(arr))  //arr array ta array kina check korbe true or false


var arr4=[5,5,2,6,67]

var arr5=Array.from(arr4) // array duplicate korlam 
console.log(arr5)