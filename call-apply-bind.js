//----------------call--------------------

//call method is used for method borrowing that is if we want to use method on a object that is defined on another object then we can borrow that method from other object
let player1={
    name:"Virat",
    lastName:"Kohli",
    printName:function(){
        console.log(`${this.name} ${this.lastName}`)
    },
    printDetail:function(type,team){
        console.log(`${this.name} ${this.lastName} is a ${type} and his team is ${team}`)
    }
}
player1.printName()//Virat Kohli
//now we have another player object
let player2={
    name:"Chris",
    lastName:"Gayle"
}

let player3={
    name:"MS",
    lastName:"Dhoni"
}

let player4={
    name:"Suresh",
    lastName:"Raina"
}
//we want to printName of player 2 so instead of defining that method again in player2 we can simply borrow that method from player1 using call() method
//object from where we are borrowing.nameoffunction.call(reference ie new object where we want to call this function)
player1.printName.call(player2)//Chris Gayle : here we are calling printName function on player 2 object by borrowing it from player 1

//Now call() method also allows us to pass argument to the function that we are calling
//so move to printDetail function printDetail in player1
//so now we are calling printDetail() function on player 2 but it also receives some paramter ie type and team so we can pass that into call after reference
player1.printDetail.call(player2,"batsman","westindies")//Chris Gayle is a batsman and his team is westeindies


//-------------apply ----------------------
/*The only difference between call and apply is the way we are passing argument into function 
In call() method we pass individual arguments separated by , after reference of object we are calling to for eg:batsman,westindies in above example 
But in apply() method we pass array as argument after reference 
eg:
*/
player1.printDetail.apply(player3,["bastman","India"]);//MS Dhoni is a batsman and his team is india

//----------------bind-----------------------------
/* The only difference between call and bind is call directly calls method on that object but in bind we create copy of function that we borrowed from other object and that copy can be called later when needed*/
const player4Detail=player1.printDetail.bind(player4,"batsman","India");//return a function that can be called later
player4Detail();//Suresh Raina is a batsman and his team is India

/*Outputs of calling all functions:
Virat Kohli
Chris Gayle
Chris Gayle is a batsman and his team is westindies
MS Dhoni is a bastman and his team is India
Suresh Raina is a batsman and his team is India
*/

