/*there are four ways of calling a function in general
//1.methods:when we call a method then "this" keyword points to object that is calling the function ie current object
//2.simple function call: when we call a simple function in normal mode "this" keyword points to window object however when we call a simple function in strict mode "this" keyword points to undefined
//3.arrow function: arrow function dont have their own this keyword they use "this" keyword of their surroundings
//4.event listener :in event listeners this keywords points to dom element it is attached to 
*/
console.log(this);//window
function name(){
    console.log(this)//window in normal(sloppy) mode undefined in strict mode
}
const name2=() => {
    console.log(this)//surrounding is global space and in that this is window object so window here too
}
const person={
    name:"jonas",
    printName:function(){
        console.log(this.name)//jonas
}
}
name();
name2();
const person2={
    name:"saurabh",
}
person.printName();
person2.printName=person.printName;//method borrowing
person2.printName();//here person2 is calling the method printName so it will point to person 2 object and output will be saurabh