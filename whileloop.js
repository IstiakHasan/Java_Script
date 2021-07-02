/*
var i=0
while(i<10){
    console.log("HM Nayem")
    i++
}

*/

var isRunning=true


while(isRunning){

    var rand=Math.floor(Math.random()*10+1)
    if(rand===9){
        console.log("Winner winner")

        isRunning=false //condition true hobar por aita false hoye jabe 
    }else{
        console.log('You have got '+rand)
    }
}