
/*
 * Complete the 'arrayManipulation' function below.
 *
 
 * Queries are interpreted as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1
* Add the values of  between the indices  and  inclusive:

* index->	 1 2 3  4  5 6 7 8 9 10
	[0,0,0, 0, 0,0,0,0,0, 0]
	[3,3,3, 3, 3,0,0,0,0, 0]
	[3,3,3,10,10,7,7,7,0, 0]
	[3,3,3,10,10,8,8,8,1, 0]
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
let arr = [];
function arrayManipulation(n, queries) {
    // Write your code here
 arr = (Array(n).fill(0));
 for(let j= 0; j<queries.length;j++){
    addNumBW(...queries[j])
   console.log(arr); 
}
let result = arr.sort((c,d)=>c-d);
return Math.max(...result);
}

function addNumBW(s,e, v){
    console.log(s,e, v);
    for(let i=s-1;i<=e-1;i++){
        arr[i]=parseInt(arr[i]+v);
    }
}
// ------------------------------Opimised version------------------------------------------------------



var date1 = new Date();
queries = [[1 ,5 ,3],[4 ,8, 7],[6 ,9 ,1],[31 ,35 ,63],[24 ,38, 7],[6 ,39 ,11]]
function arrayManipulationOptimzied(n, queries) {

    const arr = Array(n + 1);
    let maxValue = 0,
    currentNumber = 0;
    queries.forEach(([startRange, endRange, value]) => {
         arr[startRange] = arr[startRange] || { start: 0, end: 0 };
         arr[endRange] = arr[endRange] || { start: 0, end: 0 };
         arr[startRange].start += value;
         arr[endRange].end += value;
     });
    arr.forEach((cell) => {
       if (cell) {
         currentNumber += cell.start;
         if (currentNumber > maxValue) {
            maxValue = currentNumber;
         }
         currentNumber -= cell.end;
     }
   });
 return maxValue;
}
arrayManipulationOptimzied(50,queries)
var date2 = new Date();
var diff = date2 - date1; 
console.log('diff',diff);




