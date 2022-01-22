
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]; 

function noOfOcc(arr, occBy) {
  return arr.filter(x=>x==occBy).length;
}

//   console.log(noOfOcc(arr, occBy));
// arr = array 
// occBy is occurrence by 

// returns 10 occurence that is 4 
noOfOcc(arr, 10) 
