// (1) obj are variable too but obj can contain many values.(2) The name:value paires in JS obj are called as properties. (3) in ex.,"type" is property and "fiat" is property value.(4)obj call syntax "objectName.propertyName"

const car = {
    type:"fiat",
    color:"white",
    model:"69"
}
console.log(car.type," of ",car.color," is fav")


// (5) obj can also have methods.(6) Mehtods are stored in properties as function definitions.(7)Mwthod are action that can be performed on objects. 



//  ** A method is a function stored as a property.
const person = {
    firstName: "Gon",
    lastName: "freeks",
    age: 14,
    id: 001,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

/* Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:*/