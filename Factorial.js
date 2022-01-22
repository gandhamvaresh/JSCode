
// create an array of numbers in a range from 1 to 10 

console.log(Array.from({length:10},(v,k)=>k+1));

// returns [1,2,....r]
function range(r){
  return Array.from({length:r},(v,k)=>k+1);
}

let fact_arr = range(10)

//Factorial count is 
let factorial_count= fact_arr.reduce((x,y)=>x*y);

console.log(factorial_count);  
//factorial_count is 3628800
