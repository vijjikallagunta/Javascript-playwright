//extends keyword use for inheritance
//import use require('./basics7')
//If parent class has constructor cchild class also should implement the same constructor rule of inheritance
//call parent class constructor by using super keyword 
//Inheritance is main pillar in object oriented program
//the class which injherits the properties of other is known as subclass(derived,child class
//the class whose properties are inherited is knows as super class)
const Person =require('./basics7')
class Pet extends Person
{
    get location()
    {
        return "BlueCross"
    }
 constructor(firstName,lastName)
 {
     //call parent class constructor
     super(firstName,lastName) 
 }
}
let pet =new Pet("sam","ram") // create new object of the class and stroe in variable then call this 
pet.fullName()
console.log(pet.location)