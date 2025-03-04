//classes 

//class is keyword person is the class and define the property for this class
//how to create object of the class to call the properties of that class
//Import this class into any other file by usimg module.exports=class Person
module.exports=class Person{

    age =25 //age is class variable
    //getter methods //when you put get before method name (location)that is treated as property
    //this way if you have multiple line of the code inject that into your property
    //page objects created as properties and use as methods to access there
    get location() // class properties getters
    {
        return "canada"
    }


//let person=new Person() // create objet of the class
//console.log(person.age) // access properties of any class
//console.log(person.location)
//constructor is a method which executes by default when you create object of the class
//when you declare variable in constructors calles instance variables 
//object is nothing but instance of the class
//all instance properties and instance variables are defined inside constructor 
constructor (firstName,lastName)
{
    this.firstName =firstName
    this.lastName =lastName
}
//methods write in class
//reuse same entity for multiple/different persons
//convert object as class like person with es6 engine >
// it represents dynamic you cancreate N number of objects with N number of names , one common entity
fullName()
{
    console.log(this.firstName+this.lastName)
}
}
/*let person =new Person("Tim","Joseph") //sending this value at runtime to the constructor
let person1 =new Person("Chris","Jones")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())
console.log(person1.fullName())*/
//person ,person1 are the object 