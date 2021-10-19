//Date ojects represent single moment in time.Date object contains number of miliseconds from 1janauary .1970 UTC
console.log(Date);
//called as a function
//when Date object called as a function returns string of present date and time
const date=Date();
console.log(date);//Wed Oct 13 2021 14:12:04 GMT+0530 (India Standard Time)
//called as a constuctor
//when Date called as constructor returns a new date object
const date2=new Date();
console.log(date2);//Wed Oct 13 2021 14:13:41 GMT+0530 (India Standard Time)
/* ------ static methods for Date constructor functions -------------*/
console.log(Date.now())//number of miliseconsd till now  from 1970 -1634114718482
//Date.parse =parse a string representation of date in miliseconds from janaury 1970 to string date
console.log(Date.parse("Wed Oct 12 1989"));//624133800000
console.log(Date.parse("11/01/2021"));//1635705000000
/*--- instance method ie method that can be applied on object created using date constructor*/
//date2 is instance created using Date constructor
console.log(date2.getTime())//current time in miliseconds-1634115223100
console.log(date2.getFullYear())//current year-2021
console.log(date2.getDate())//todays date between 1 to 31  -13
console.log(date2.getMonth())//from 0 to 11 so oct is 9 in this case
