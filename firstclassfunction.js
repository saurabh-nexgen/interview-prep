//the ability of function to behave like any other varibale ie the ability of function to be passed as argument and to be returned from another function is called first class function
//this function will gives us array of ages and recives array of dob and a function that calculate age based on dob
//1-----------callback functions----------
function ageArr(arr,func){
    let age=[];
    for(let i=0;i<=arr.length-1;i++){
        age[i]=func(arr[i]);
    }
    return age;
}
function calcAge(dob){
    return new Date().getFullYear()-dob
}
let dobs=[1990,1995,1991,1985,1866];
const ages=ageArr(dobs,calcAge);
console.log(ages);
//2------function returning function-----
function personDescription(job,name){
    if(job==="teacher"){
        return function(){
            console.log(`${name} is ${job}`)
        }
    }
    else if(job==="musician"){
        return function(){
            console.log(`${name} is ${job} and he plays guitar very well`)
        }
    }
    else{
        job="nothing";
        return function(){
            console.log(`${name} does ${job}`)
        }
    }

}
personDescription("musician","pritam")();
//higher order function
/* the function which receives function as argument or function which return a function is called higher order in the above scenario personDescription() and ageArr() is higher order function */