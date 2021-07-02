//Infinity For Loop

//while loop k for loop korar way

/*
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
*/



for(; ;){
    var rand=Math.floor(Math.random()*10+1)
    if(rand===9){
        console.log("Winner winner")

       break//condition true hobar por aita false hoye jabe 
    }else{
        console.log('You have got '+rand)
    }
}