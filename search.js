//search Data

var arr=[4,7,2,6,8,4,55,9,89,27,10]   //random array
var find=10
var isFound=false


for(var i=0;i<arr.length;i++){
    if(arr[i]==find){
        console.log("Data Found at Index "+i)
        isFound=true
        break;
    }
}


//not found jeno repete na hoi tai aita use korte hoi 

if(!isFound){
    console.log('Data not Found')
}