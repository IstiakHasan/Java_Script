var a ='abc'


function x(){
   //var a =20 // aita call na korle output asbe 'abc'

    function y(){
        var a=30// aita call na korle output asbe 20
        console.log(a)// aita last a call hobe
    }
    console.log(a)// aita first call hobe 
    y()
}
x()




function test(n){

    function a(){
return n%3===0
    }

function b(){
    return n%5===0
}
if(a() && b()){
    console.log(n+'Is divisible by both 3 and 5')
}else{
    console.log('Not a valid number')
}


}

test(20)