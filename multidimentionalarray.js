//Multi Dimensional Array
var arr=[
    [83,43,53,64],
    [53,64,64,23],
    [43,53,64,12]
]
//console.log(arr[0])//single array print hocce 
//console.log(arr[1])//1 index er array print hocche

for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        console.log('Element '+i+":"+arr[i][j])
    }
    //console.log(arr[i])
}