// function something(greet,name){

//     function sayhi(){
//         console.log(greet,name)
//     }
//     sayhi()
// }


// something('Good morning',"Istiak Hasan")



function something(greet,name){
    function getfirstname(){
    if(name){
        return name.split(' ')[0]//split method 
    }else{
        return ''
    }

    }
    var message=greet+' '+getfirstname()
    console.log(message)

}


//something('Good morning','Istiak Hasan')
something('Good morning')