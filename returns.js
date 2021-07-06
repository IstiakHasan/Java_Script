function AddSomething(){

    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum +=arguments[i]
    }
    return sum

}

var sresult=AddSomething(1,3,4)
console.log(sresult)


function person(name,email){


    return{
        // name: name,
        // email:email
        name,email
    }

    // return korar por r kico execute hobe na 
}
var p1=person("Hm Nayem","hasan.m.nayem@gmail.com")
console.log(p1)