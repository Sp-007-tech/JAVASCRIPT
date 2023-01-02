// Function is a block of code designed to perform particular task.
// (1) we can reuse the code means define the code once, and use it many times with different arguments to produce different result.

function multi(a,b){
    return a*b 
    }

let L = multi(4,5)
console.log("Multiplication is ",L)



// farenheit to celsius

function toCelsius(farenheit){
    return (5/9) * (farenheit-32);
    }

let l = toCelsius(77)
console.log(l) //result=25
l = toCelsius
console.log(l) //result=[Function: toCelsius]

// above example, "toCelsius" refer to the function object and "toCelsius()" refer to the function result.


// func used as variable value ===(1) Instead of using a variable to store the return value of a function, we can use the function directly , as a variable

let text = " The temperature is " + toCelsius(88) + " celcius "
console.log(text)

// local variable==(1) vari. decalre within JS func. become local to the func.(2)LV can be only accessible form within the function.

function local(){
    let carName = "BMW"
}
console.log(carName)




function oneAvg(x,y) {
    console.log ("Done")
    return (x+y)/2
  }
  let a = 1
  let b = 2
  let c = 3
  console.log("Average of a and b is ",oneAvg(a,b))
  console.log("Average of b and c is ",oneAvg(b,c))
  console.log("Average of c and a is ",oneAvg(c,a))
  



  //another way to define function 
  const sum = (p,q)=>{
     return p + q
  }
  console.log(sum(10,4))
  



  /*without parameter we can also create function*/
  
  const hey1 = ()=>{
    console.log("Hey, I'm fine ")
  }
  hey()
  


  
  //with using return keyword 
  const hey= ()=>{
    console.log("hello")
    return "Sp"
  }
  let v= hey()
  console.log(v)
  
