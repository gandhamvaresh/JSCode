
function repeatedString(s, n) {
    // Write your code here
       let count = (s.match(/a/g) || []).length * Math.floor(n/s.length)
let remainder = n % s.length
let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length

return count + remainderCount

}


//The substring we consider is abcacabcac , the first  characters of the infinite string. There are  4 occurrences of a in the substring.
