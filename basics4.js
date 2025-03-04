//block of code 
//var -access at global level /function level
//let -access at global level /block level{}
// let and var both can reinitialize
// const-almost same as let but it cannot be reinitialize
 var greet="evening1" // var keyword at global level
//const greet= "evening"
//greet="night" //reintialize possible with var and let keyword 

if(i==1){
    var greet="Afternoon" //var keyword at block level which is not supported by var so introduced let keyword for this 
}
function add(a,b){
    return a+b
    var greet="Morning" //var keyword atfunction level 

}
let sum =add(2,3) //result store in variable sum
console.log(sum)
console.log(greet) //print var keyword 
// anonymous function> do not have name >function expressions
let sumOfIntegers =function(c,d)
{ // directly assign function value to a variable with out any name 
    return c+d
} //another way of anonymous function is 
let sumOfIntegers1 =(c,d)=>c+d //=>fatpie
//declare variable but need to send the values
console.log(sumOfNumbers(2,3)) //gives output
//console.log(sumOfIntegers)
