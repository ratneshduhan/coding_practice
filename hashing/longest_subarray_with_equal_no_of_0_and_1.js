// Longest subarray with equal numbers of zeros and ones

const naiveSolution = function (array) {
    let len = 0;
    let maxLen = 0;
    for (let i = 0; i < array.length; i++) {
        let currentsum = 0;
        for (let j = i; j < array.length; j++) {
            if (array[j] == 0) {
                currentsum -= 1;
            }
            else currentsum += 1;

            if (currentsum == 0) {
                len = j - i + 1;
                maxLen = Math.max(len, maxLen);
            }
        }
    }
    return maxLen;
}

const optimalSolution = function (array) {
    let map = new Map();
    let prefixSum = 0;
    let len = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0)
            prefixSum -= 1;
        else
            prefixSum += 1;


        if (prefixSum == 0) {
            len = i + 1;
        }

        if (map.has(prefixSum)) {
            len = Math.max(len, i - map.get(prefixSum));
        }
        else map.set(prefixSum, i);

        // console.log(i, prefixSum, len, map);
    }
    return len;
}

let array = [0, 1, 0, 1, 1, 1, 0, 0];
console.log(`naive solution: ${naiveSolution(array)}`);
console.log(`optimal solution: ${optimalSolution(array)}`);