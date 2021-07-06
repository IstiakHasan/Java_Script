//********baire theke input dawea k arguments bole */

// function add(a,b){  //var likhte hbe na

// var result=a+b
// console.log(result)
// }
// add(10,20)
// add(550,20)
// add(10,2430)

var arr1=[3,6,7,8]
var arr2=[5,6,2,64]

function someOfArray(arr){// arr variable nitey hbe
    sum=0
    for(var i=0;i<arr.length;i++){
        sum +=arr[i]
    }
    console.log(sum)
}

someOfArray(arr1)
someOfArray(arr2)