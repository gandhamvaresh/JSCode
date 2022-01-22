function jumpingOnClouds(c) {
    // Write your code here
let count = -1;
        
        for (let i = 0; i < c.length; i++ ) {
            if (i + 2 < c.length && c[i + 2] == 0) i++;
            count = count+1;
        }
return count;
}

/*       
Output Format
player can can jump 1 or 2
Print the minimum number of jumps needed to win the game.

Sample Input 0

7
0 0 1 0 0 1 0
Sample Output 0

4
Explanation 0:
The player must avoid  and . The game can be won with a minimum of  jumps:

*/
