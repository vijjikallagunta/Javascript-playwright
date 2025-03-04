const flag= true

if (!flag) // expresiion value chagned to ! not the varible value 
    {
    console.log("condition satisfied") // condition true execute one time 
}
else
{
 console.log("condition not satisfied")
}
let i=0 // variable declaration or initialization
while(i>10) // condition  
{
    i++ //increment /decrement
    console.log(i) //print
}

do{
i++
}while(i>10); //do while need to end with ; 
    console.log(i)

// from 1 to 10 give me common multiple values of 2 and 5 
console.log("***********************")
/*for(let k=1;k<=10;k++){ // initialize, condition, increment all in one
    if (k%2==0)
        {
        console.log(k)
for(let k=1;k<=10;k++){ // initialize, condition, increment all in one
    if (k%2==0 && k%5==0)
        {
        console.log(k)
        for(let k=1;k<=100;k++){ // initialize, condition, increment all in one
            if (k%2==0 || k%5==0)
                {
                console.log(k)*/

// need 1 st 3 digits to display
let n=0;
for(let k=1;k<=100;k++){ // initialize, condition, increment all in one
if (k%2==0 && k%5==0)
{
    n++
    console.log(k)
    if(n==3)
        break
}
}
let required =true
while(required){
    console.log(required)
    required=false // to come out of the loop 
}