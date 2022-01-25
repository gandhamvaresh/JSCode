/*

i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]



------------------------------    */
function minimumSwaps(arr) {

 let swaps = 0;

    const tmp = {};
    arr.forEach((v, i) => tmp[v] = i);;

    arr.forEach((v, i) => {
        // because they are consecutives, I can see if the number is where it belongs
        if (arr[i] !== i+1) {
            swaps += 1
            const t = arr[i]
            arr[i] = i+1
            arr[tmp[i+1]] = t

            // Switch also the tmp array, no need to change i+1 as it's already good now
            tmp[t] = tmp[i+1]
        }
    });

    return swaps
}
