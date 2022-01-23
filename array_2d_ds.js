/*
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0


-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The  hourglass sums are:       -9 -9 -9 -9 -9 -9 -9

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is  from the hourglass beginning at row , column :
*/



function hourglassSum(arr) {
   let ar =[];
   let ma = [...arr]
for(let y=0;y<=3;y++){
for(let x=0;x<=3;x++){
ar.push([ma[x][y], ma[x][y+1], ma[x][y+2], ma[x+1][y+1],ma[x+2][y], ma[x+2][y+1], ma[x+2][y+2]].reduce((i,j)=>i+j))
}
}
return ar.sort((x,y)=>x-y).reverse()[0];
}
