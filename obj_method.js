var obj={


    x:20,
    y:10,
    z:32
}
//console.log(Object.keys(obj))  //key ta return kore array akare
//console.log(Object.values(obj))//value return korbe array akare
//console.log(Object.entries(obj))//two dimentional  array akare key r value return korbe


var obj2=Object.assign({},obj) //object copy korar jonno method
obj2.x=100

console.log(obj)
console.log(obj2)