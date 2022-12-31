// when adding a no. and string JS will treat the number as a string..

let x = 69 + "hey";
let y = "HEy" + 69;
console.log(y)
console.log(x);


//(1) JS evaluate exp. from left to right. (2)Different sequece can produce different result..
const z = 100 - 31 + "GOT it !";
console.log(z)
// firstly JS treats 100 & 31 as number until it reaches at "GOT it"...in 2nd ex., since the 1st operand is a string, all operand treaded as string. 
const o = "What" + 6 + 9;
console.log(o);


// JS has dynamic type,means that the same variable can be used to hold diffe.data type.
let a;// it results as Udefined
console.log(a)
a = 10; // it results as number
console.log(a)
a = "Hey "// it result as string.
console.log(a)


// Js has only one type of number.Number can be written with,or without decimal
let n =69;
console.log(n)
n= 69.00//after decimal it has 00, so the output will be only 69.
console.log(n)
n = 69.01//after decimal it has 01, so the output will be 69.01  
console.log(n)


// Exponential(e)
let n1 = 456e5; //e5 means 5times zero after no.
console.log(n1)
n1 = 456e-5;
console.log(n1) // e-5 means four time zero 


// BOOLEAN DT..
var x1 = 5;
var x2 = 5;
var x2 = 16

console.log(x1);

// Array JS
const car = ["volvo","BMW","RR","Ghost"]
console.log(car[0])


// JS Obj....(1) obj are written in curly braces..(2)use const while declaring objects
const folks = {
    firstName : "Gojo",
    lastName : "Sataru",
    age : 20,
    eyeColor: "Blue"
};
console.log(folks.firstName + " is " + folks.age + " years old. ")

const creat = {
    identity : "human",
    born : "AS Human",
    age : 800,
    favFood : "non-veg"
};

console.log(creat.identity + " are " + creat.age + " years old and his favourite food is " + creat.favFood )


// typeof operator = used to show the type of vari.

let num = 10
console.log(typeof(num),num) //number

let X = "hey"
console.log(typeof(X)) //string

 let bool = true
 console.log(typeof(bool)) //boolean

 let dec = 69.09
 console.log(typeof(dec)) //number

 let Car = ""
 console.log(typeof(Car)) //string
