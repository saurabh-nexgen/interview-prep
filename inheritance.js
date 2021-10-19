var Person=function(name,lastName,age){
    this.name=name;
    this.lastName=lastName;
    this.age=age;
}
const person1=new Person("Saurabh","Srivastav",24);
console.log(person1)
//inheritance of methods
Person.prototype.getDob=function(){
    this.dob=new Date().getFullYear()-this.age;
    return this.dob;
}
//inheritance of property
Person.prototype.getType="Person";
const person1Dob=person1.getDob();
console.log(person1.getType);
console.log(`${person1.name}'s dob is ${person1Dob}`);
console.log(person1);
//__proto__ vs prototype property
//__proto__ is prototype of objects created using constructor function while prototype is prototype property of constructor
console.log(person1.__proto__);
console.log(Person.prototype);
if(person1.__proto__=Person.prototype){
    console.log("hey There!");
}
//every object in javascript inherit from Object objects
console.log(person1.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("getDob"));
//Object.create
const person2=Object.create(
    {getDob:function(){
    this.dob=new Date().getFullYear()-this.age;
    return this.dob;
}});

person2.name="Jonas";
person2.lastName="brothers";
person2.age=34;
var person2Dob=person2.getDob();
console.log(person2);
console.log(`${person2.name}'s dob is ${person2Dob}`);
console.log(person2.__proto__);