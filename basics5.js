//declare strings ,day is string variable
//Import the baiscs7.js file class by using require('./filename')//
//const person (call the class person from basics7.js)exporting class by creating one const
const Person = require('./basics7')
let day='tuesday '
console.log(day.length)//8
let subDay=day.slice(0,4)//it will slice from 0to 4 tues
console.log(subDay)

console.log(day[1])
//tue  day
let splitDay =day.split("s")
console.log(splitDay[1].length)// split the string
console.log(splitDay[1].trim().length) //trim the string
console.log("*****************")
//parseInt  , toString
let date = '23'
let dateA = '27'
//convert string to a number by using parseInt , toString is a method convert back integer to string
let diff = parseInt(dateA) - parseInt(date)
console.log(diff)
diff.toString()

//Concatenate 2 strings
let newQuote =day+ "is Funday"
console.log(newQuote)
//indexOf > to know wheee exactly character is present 
let val =newQuote.indexOf("day")
//let val =newQuote.indexOf("day",5) //search mechanism should start at 5th so that it will report that index avlaue 
console.log(val)
let count =0
let value =newQuote.indexOf("day")
// how many times day occurs tuesday is funday //occurs 2 times 
while (value!== -1){
    count++
    value =newQuote.indexOf("day",value+1)
} 
console.log(count)
//create object of the Person class(which is in baiscs7.js file to use it in this basics5.js)
//to access Person class from Basics7 in basics 5 file need to use export an then use require 
// then create object of the class to call in baisc5.js file //
//before run this comment out in basics7.js file 
let person = new Person("Chris","edward")
console.log(person.fullName()) //call the method fullname from basics7.js