function minimumBribes(q) {
    let num = 0
let chaotic = false
for(let i=q.length-1; i>=0; i--) {
if(q[i]-i>3) chaotic = true
for(let j=q[i]-2;j<i;j++){
if(q[j]>q[i]) num++
}
}
if(chaotic) console.log("Too chaotic")
else console.log(num)

}

//https://www.hackerrank.com/challenges/new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
