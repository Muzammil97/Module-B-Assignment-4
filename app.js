

const arrays = [
    42,
    true,
    "Hello, World!",
    {
      name: "John",
      age: 25,
      isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
  ];



// Q1: Convert all elements to their string representation using map Method? 

let toStringArray = arrays.map((element)=> element.toString())
console.log(toStringArray); 



// Q2: Filter only number elements using filter Method? 

let isNumberArray = arrays.filter((element)=> typeof element === 'number')
console.log(isNumberArray); 

// Q3: Log each element's type to the console (does not return anything) using forEach Method? 

arrays.forEach((element) => {
    console.log(typeof element);
  });


// Q4: Sum up only the numbers in the array reduce Method? 

let ReduceArray = arrays.reduce((allSum,element)=>{
    if(typeof element ==='number') return allSum+element 
    return allSum
},0)

console.log(ReduceArray); 

// Q5: Find the first boolean value in an array using Find Method? 

let findInArray = arrays.find((element)=> typeof element === 'boolean')
console.log(findInArray); 


// Q6: Find the index of the first object in an array using FindIndex Method? 

let findIndexInArray = arrays.findIndex((element)=> typeof element === 'object')
console.log(findIndexInArray); 



// Q7: Check if the array contains any numbers in an array using some method? 

let someElementArray = arrays.some((element)=> typeof element === 'number')
console.log(someElementArray); 



// Q8: Check if all elements are of type 'string' in an array using every method?

let everyElementArray = arrays.every((element)=> typeof element === 'string')
console.log(everyElementArray); 


