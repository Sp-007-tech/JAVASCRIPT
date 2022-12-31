// A JS class is not an object..It is a template fo JS object

class Car {
    constructor(name,year){
        this.name=name
        this.year=year
    }
}

const myCar = new Car("ford",2014)
console.log(myCar.name+ " " + myCar.year)
const myBike = new Car("BMW", 2021)
console.log(myBike.name + " " + myBike.year)



// class Methods
class Cab {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(){  // here, age is method
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myC = new Cab("Lambo",2014);
console.log("My car is " + myC.age() + " years old ")

// we can send parameter to the calss method
class Can {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myA = new Can("illumi",2015);
console.log("My car is ", myA.age(year)," years old. "); 
