function a(){
    const b=10;
    function d(){
        console.log(c);
    }
    const c=20;
    return d;
}
a()();
var c=100;
function d(){
    return function e(){
        console.log(c);
    }
}
c=200;
d()();
function clojureTimeOut() {
    var i=1;
    while(i<=5){
        setTimeout(() => {
            console.log(i)
        }, i*1000);
        i++;
    }
}
/*explanation:first of all the inner callbacks will form closure with it lexical scope and remembers the reference to i and since while loop is synchronous top-level code hence it will execute all of it iteration till the end i=6 and at each iteration these callbacks will be stored in another scope but due to clojure it remember its lexical scope variable reference and after end of iteration it wil start waiting for time and execute one by one
6 after 1seconds
6 after 2seconds
6 after 3seconds
6 after 4seconds
6 after 5seconds
*/
clojureTimeOut();
//lets fix this and print 1 after 1 seconds 2 after 2seconds
function clojureTimeOut2(){
    let i=1;
    while(i<=5){
        setTimeout(() => {
            console.log(i)
        },i*1000);
        i++;
    }

}
clojureTimeOut2();

function clojureTimeOut3(){
    for(let i=1;i<=5;i++){
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
}
//here in this case a new varibale i with its value is created for each iteration and callback function will remember its variable in its iteration and henec
//1 2 3 4 5
//new copy of i will b created in each iteration and blockscoped so no errors fresh copy of i in each iteration is new ie different variable in each iteration
clojureTimeOut3();
//--- how to solve the problem with var to print 1 2 3 4 5 after each seconds create a function for each iteration then pass i and in that case function in each iteration has it own variable i ---//
function clojureTimeOut4(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(() => {
                console.log(x)
            },x*1000);
        }
        close(i);
    }
}
clojureTimeOut4();
