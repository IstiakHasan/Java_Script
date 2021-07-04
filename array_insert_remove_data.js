//Insert and Remove Element

var arr=[1,2,3,4,5,6,7,8]
//Insert 9 to index 3
//arr[3]=9
//arr.push(9)   last a bosbe
//arr.unshift(9) first a bosbe
//arr.splice(3,0,9)//data insert

//****Remove data****
//arr[3]=undefined;     data undefined hobe , kinto remove hbe na
//arr.pop()    //last element remove hoye jabe 
//arr.shift()  //first er element remove hoye jabe 
arr.splice(3,1) // data remove from 3 number index

console.log(arr)