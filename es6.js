//1 arrow function 
/* arrow function is es6 way of writing a function but the difference between function and arrow function is that they do not have their own "this" keyword they use "this" keyword of its
surrounding/parent/lexicalscope */
const printName=() => {
    console.log(namee)//saurabh
}
var namee="saurabh";
printName();
//2.Destructuring
/*destructuring is way of decomposing array and object and store into indvidual variables*/
const person={
    name:"saurabh",
    lastName:"srivastav",
    job:"backend engineer"
}
const {name,lastName,job}=person;
console.log(name);
console.log(lastName);
console.log(job);
//what if we want key with different name 
const {name:n,lastName:l,job:j}=person;
console.log(n);
console.log(l);
console.log(j);
//lets destrucure array now
const arr=[1,2,4,5];
const [arr0,arr1]=arr;//follows indexing just like an array
console.log(arr0);
console.log(arr1);
//destructuring is also used when we want to return not one values not whole object but some values of object and arrays
const defunction=() => {
    return {name:name1,lastName:lastName1}=person;
}
const result=defunction();
console.log(name1);//saurabh
console.log(lastName1);//srivastav

//3.spreadoperator:(...) spread operator is used to decompose whole array or object into individual elements
function sum(num1,num2,num3,num4){
 console.log(num1+num2+num3,num4);
}
sum(...arr)
const person2={...person}//now person2 will be hard copy and it will not point to person but it is a new object
console.log(person2);//{ name: 'saurabh', lastName: 'srivastav', job: 'backend engineer' }
//lets use spread operator to something useful that is concating two arrays
const arr2=[10,17,18];
const arr3=[...arr,...arr2];//decompose both arrays and individuals and combine it into new aray
console.log(arr3);
//we can also use spread operator to find unique from arrays by using spread operator with set
const arr4=[10,17,18,18,10,29,19,19,29,90,11,90,10];
const set1=new Set(arr4);
const arr4Unique=[...set1];
console.log(arr4Unique)//gives unique from arr4[10,17,18,29,19,90,11];

//Rest parameters(...) when ... symbol used in function declaration it is not spread operator it is rest parameter and it task is opposite of spread operator because it compose individual elements into arr
function restFun(...values){
  values.forEach(el => console.log(el));//1 3 4 5 6
}
restFun(1,3,4,5,6)