//break statement


while(true){

    var rand=Math.floor(Math.random()*10+1)
    if(rand===9){
        console.log("Winner winner")

        break //condition true hobar por aita break hoye jabe 
    }else{
        console.log('You have got '+rand)
    }
}


for(var i=1;i<10;i++){
    if(i==5){
        break
    }else{
        console.log(i)
    }
}