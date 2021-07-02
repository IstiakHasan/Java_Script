//and operation
// && || !
//A && B
// true && true=true
//true && false=false
//false && true=false
//false && false=false

// or poeration
//A||B   
//true||ture=true
//true||false=true
//false||true=true
//false||false=false


var a=10
var b=20
var c=40
var d=30

if(a>b && c>d){
    console.log("A is grater than B and c is gatter than d")
}else{
    console.log("At least one condition is false")
}
if(a>b || c>d){
    console.log("Condition is true")
}else{
    console.log("Condition if False")
}


var check=!(a>b)
console.log(check)