// create an array of numbers in a range from 1 to 10 

console.log(Array.from({length:10},(v,k)=>k+1))


//  create an array of numbers in a range from START to END   [9 TO 18]

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var result = range(9, 18); 
console.log(result);// [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
