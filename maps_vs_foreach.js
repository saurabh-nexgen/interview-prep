/* map() and foreach() both are array methods which is used to loop over the array and execute callback function for each element.Callback function has access to three parameter element,index and array itself*/
//difference1:In terms of return
//map() return new copy of array foreach doesnt return newcopy but return undefined foreach is used where we dont want new array and just execute callback function for each element and used map when we want new array after executing callbacks for each element
const arr1=[1,2,3,4,5,6,7,8,9,10];
const arr2=arr1.forEach(element => console.log(element));//1 2 3 4 5 6 7 8 9 10
const arr3=arr1.map(element => element *5);//[5,10,15,20,25,30,35,40,45,50];
console.log(arr3);
console.log(arr2);
//2nd differenece is in terms of chaining
//we can chain methods on map() but not on foreach
const arr4=arr3.map(element => element *10).filter(element => element >= 400);
//here we are chaining filter method on map
console.log(arr4);
//this is not possible with forach
//const arr5=arr3.forEach(element => element *10).filter(element => element >= 500);//error