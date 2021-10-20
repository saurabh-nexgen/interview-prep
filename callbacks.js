/* callbacks functions are basically functions that we passed as an argument into another function and later being called inside that function
callbacks functions gives us access to asynchronous programming in synchronous single threaded language ie due to callbacks functions asynchronous programming is possible 
*/
setTimeout(() => {
    console.log("timer expired after 5 seconds")
},5000);
function x(y){
    console.log("x");
    y();
}
x(function (){
console.log("y");
});