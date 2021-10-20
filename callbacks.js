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
//explanation:first of all javascript start executing code line by line when it comes to setTimeout js engine know that it cant execute that so passed it into webApI environment and attach callbacks function to it but javscript not wait for timer to be expired it moves to next line where we calling x and start executing x function so first x will be on console then y() will be called and y will be on console now callstack is empty timer would have been expired so the event loop will pass timer callback function into callstack and we will have timer expired after 5 seconds on console 
/*output:x
        :y
        :timer expired after 5 seconds
*/ 
