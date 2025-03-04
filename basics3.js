var marks = Array(6)

var marks = new Array(20,30,35,12,45,60)
var marks =[20,30,35,12,45,60] // declaring 6 values in arrays store in variable )
//sub array from the main array split 
subMarks= marks.slice(2,5)
console.log(subMarks)
console.log(marks[2]) // display index 2 value 
marks[3]=14 // update the 3rd value 
console.log(marks) // print the updated values[20,30,35,14,45,60]
console.log(marks.length)// to get length of the array // 6
marks.push(75) // add new element at the last with push 
console.log(marks) //[20,30,35,14,45,60,75]
marks.pop() //  delete the last element from the array [20,30,35,14,45,60]
marks.unshift(13) // insert element at the start of the array
console.log(marks)
console.log(marks.indexOf(60)) // checks the index of the value 
//120 is there in the array check
console.log(marks.includes(120))
//achieve sum of elements in the array
var sum =0
for(let i=0;i<marks.length;i++)
{
   // console.log(marks[i])
    sum = sum+ marks[i] //32+40
}
console.log(sum)
//reduce filter map
// achieve sum value with out if else condition by using reduce method, and writing 
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
var scores =[12,13,14,16]
//create new array with even numbers of scores array [12,13,16]
var evenScores =[]
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2 == 0){
        evenScores.push(scores[i])
}
}
console.log(evenScores)
// instead of above if else condition write below one line 
//  to achive above if else evenscroes by using filter
//using filter we can achieve the same results by avaioding if else statement above
let newFilterEvenScores=scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)//[12,14,16]=>[36,42,48]

// map 
let mappedArray=newFilterEvenScores.map(score=>score*3)
    //Iterate and give you map value 
    console.log(mappedArray)
    let totalVal=mappedArray.reduce((sum,val)=>sum+val,0)
    console.log(totalVal) //total value 126
//combining filter, map, reduce array methods
var scores1 = [12,13,14,16]
let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)
 //string arrays // bubble sort recurssive function
 let fruits =["banana","mango","pomegranate","apple"]
 console.log(fruits.sort()) //ascending order
 console.log(fruits.reverse())// descending /reverse order
 var scores1 =[12,3,19,16,14]//9
 /*console.log (scores1.sort())
 scores1.sort(function(a,b){
    return a-b
 })*/
 console.log(scores1.sort((a,b)=>a-b)) //print sorted one
 