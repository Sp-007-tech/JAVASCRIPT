//String are immutable ....every method return a new string but the original string can't be changed.. 

let nm = "shailesh"
/*console.log (nm.length)
console.log (nm.toUpperCase())
console.log (nm.toLowerCase())
console.log (nm.slice(2,6))
console.log (nm.replace("shailesh","Elon"))*/

let frnd = "Naman"
console.log (nm.concat(" is a friend of ", frnd , " Ok "))


//using for loop we can print string

let quiz = ["RonaldRead","Richard","Ram","Elon"]
//for (let i = 0; i < quiz.length; i++) {
 // console.log (i + quiz)
for(let i of quiz){
  console.log(i)
}

