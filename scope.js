var name="saurabh";
var lastName="srivastav";
function print(){
    function printName(){
        const age=22;
        console.log(name);
        console.log(lastName);//srivastav
    }
    printName();
}
print();
console.log("localscope->lexicalEnv of parent->null==not defined");
var dob=1999;

/*const calculateAge=() => {
    console.log(this.dob);
    const age=new Date().getFullYear()-this.dob;
    return age;
}
function calculateAge2(){
    console.log(this.dob);
    return new Date().getFullYear()-this.dob;
}*/
function calculateAge3(){
    const calculateAge4=() => {
        console.log(this.dob);
        const age=new Date().getFullYear()-this.dob;
        return age;
    }
    const age=calculateAge4();
    console.log(age);
}
/*const age=calculateAge();
const age2=calculateAge2();
console.log(age);
console.log(age2);*/
const age=calculateAge3();
