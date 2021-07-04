//first theke last porjonto sob gulu element k loop hisabe chalona korake array traversing bole
var arr=[4,5,1,6,8,9,40]

//arr[arr.length-1]
/*
for(var i=0;i<arr.length;i++){
    //console.log(arr[i])  // output:4 5 1 6 8 9 40
    arr[i]=arr[i]+2
    
}
console.log(arr)
*/
//sob gulu number er jogfol
var sum=0
for(var i=0;i<arr.length;i++){
    sum +=arr[i]
}
console.log(sum)

//even number er jogfol
sum=0
for(var i=0;i<arr.length;i++){
   
    if(arr[i]%2===0){
        //console.log(arr[i])
       sum +=arr[i]
    }
   
}
console.log(sum)