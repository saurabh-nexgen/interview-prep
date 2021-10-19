//hoisting is a property by which we can access a varible even before initializing it and call a function even before declaring it
console.log(x);//undefined due to memory allocation but not actually allocating value till this point
getName();//"namaste javascript since we assign whole function code and we are calling that"
console.log(getName);//function code due to memory allocation 
getName2();//error not a function beacuse till this point it is assigned undefined
console.log(getName2)//undefined due to memory allocation
getName3();//error not a function beacuse till this point it is behaving as a variable
console.log(getName3);//undefined due to memory allocation
var x=10;
function getName(){
    console.log("namaste javascript by akshay Saini")
}
//arrow function is allocated undefined just like varaibel in memory creation phase
var getName2=() => {
    console.log("get name 2")
}
var getName3=function(){
    console.log(getName3);
}






