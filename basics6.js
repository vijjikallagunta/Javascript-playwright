//java script objects
// object is collections of properties
//person name object,-- firs name , lastname, are prperties
let person = {
firstName:'Tim',
lastName:'joe',
 age: 24,
 fullName :function() //anonymous function which has no name
  {
 console.log(this.firstName+this.lastName)  //use this keyword
}

}
console.log(person.fullName()) // to call function need to give ()after object.property()
console.log(person.firstName)  //.notation
console.log(person['lastName'])//array.notation
person.firstName = 'Tim dane'
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender  //delete persongender
console.log(person)
console.log('gender'in person) // displays gender property , in keyword, person object
//concept of iterating every property in your person object by using for loop
//print all the values of javascript object 
for (let key in person ){
    console.log(person[key])
}