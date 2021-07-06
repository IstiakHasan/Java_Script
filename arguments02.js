function test(a,b,c){
    // console.log(arguments)
    // console.log(typeof a)
    // console.log(JSON.stringify(arguments))


     for(var i=0;i<arguments.length;i++){
         console.log(arguments[i])
     }

}



function addAll(){ //perameter na nileu arguments hbe


    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum +=arguments[i]
    }
    console.log(sum)



}


test(10,20,30)


addAll(3,5,6,7,8,8)
addAll(5,5,6,7,8,8,4,4,4,5,6,)