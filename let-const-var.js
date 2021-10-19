console.log(a)//undefined since they are assigned memory in global scope and can be access even before initialization
var a=100;
//console.log(b);//not defined error since let and const are assign memory in script scope in memory allocation phase and cannot be accesed before initilization

let b=101;
console.log(this.a)//this points to global object and a is assigned memory in global object hence 100
console.log(this.b)//since this points to global object but b is not assigned memory there we will get undefined