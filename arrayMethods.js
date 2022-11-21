let num1 = [1,2,3,4,5,6]

let b= num1.toString()
console.log (b, typeof b)


//let c= num.join("_")
//(1)join method.... we can use any no. or character in the place of "_"
let c = num.join(" and ")
console.log (c,typeof c)

//(2) pop() ....pop return popped element
let r= num.pop()
console.log (num,r)

//(3)push()...returns the new array length
let a = num.push(69)
console.log (num,a)

//(4)shift()....remove 1st element and return it
let s= num.shift()
console.log (s,num)

//(5)unshift().....adds element to the beginning and return new array length
let m= num.unshift(0)
console.log(a,num)


//(6)delete()
let num= [1,2,3,4,5,6,7,8,9]
console.log(num)



//delet.....ask in interview ..if we can delete some item in array,the length of array can't be changed ..the length should remain constant 

let num0= [1,2,3,4,5,6,7,8,9,0]
delete num[1]
delete num[2]
console.log (num0)
console.log (num0.length)



//concat....(1)using concat method we can combine two Arrays and create new array and (2)it won't change existing array..or it will return new Arrays (3)  we can also concat more than one array 
let num5= [1,2,3,4,5]
let num_more = [11,12,13,14,15]
let num_evenmore= [111,222,333,444,555]
let newArray= num5.concat(num_more,num_evenmore)
console.log (newArray)

//sort Method ...(1) Sort Method can modify the existing Array..(2) This method can arrange the element by alphabetically 
let num2=[555,22,3,14,6,5,8,8,229]
num2.sort()
console.log (num2)

//reverse (...can modify existing array)
//splice ()......(1)splice can bd used to add new items to an Array (2) in below example 2 is the position to be add and 3 is the no.of element to remove and 1111 is the element to be added in array
let numb= [12,55,67,34,97,90,34]
numb.splice(2,2,111,222,333,444,555,666)
console.log (numb)

//slice....slice can not modify the existing Array we have to create new array




// Using loop in Array

let numA = [2,4,5,6,68]
for (let i = 0; i < num.length; i++) {
  console.log (numA[i])
  }


//for each loop...it's take 3 argument and for- each is used when we need to perform some action on array element .

num.forEach((element)=>{
  console.log(element + element)
})

//Array.from
let nm= "Levi"
let arr = Array.from(nm)
console.log (arr)

//for...of == it's a short cut and very easy..
for (let i of num){
  console.log(i)
}



//Map..Filter..Reduce 
//(1)MAP....is used when we need to create new array (2) MAP method can return array


let aaa= [45,65,78]
aaa.map((value,index, array)=>{
  console.log(value,index,array)
})
console.log (aaa)
  
//Arrays Filter method  (1)filter is an Array with values that passes a test to create new Arrays (2)....This methods can't change original array (3)....filter can return a array


let arr2 = [45,67,7,2,0,54]
let a2 = arr2.filter((a)=>{
  return a<10
})
console.log (a2)

//Reduce method 
// In js function can be also create as a variable...  (2)...reduce can return a value ..

let arr3=  [1,2,3,4]
let newarr3= arr3.reduce((h1,h2)=>{

return h1 + h2

})
console.log (newarr3)

