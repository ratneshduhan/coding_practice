// Longest subarray with given sum


const naiveSolution = function (array, givenSum) {

    let maxLen = 0;
    let len = 0;
    for (let i = 0; i < array.length; i++) {
        let currentSum = 0;
        for (let j = i; j < array.length; j++) {
            currentSum += array[j];
            if (currentSum == givenSum) {
                len = j - i + 1;
                maxLen = Math.max(maxLen, len);
            }
        }
    }
    return maxLen;
}

const optimalSolution = function (array, givenSum) {
    let map = new Map();
    let prefixSum = 0;
    let len = 0;
    let maxLen = 0;
    for (let i = 0; i < array.length; i++) {
        prefixSum += array[i];
        if (prefixSum == givenSum) {
            len = i;
            maxLen = Math.max(len, maxLen);
        }
        if (map.has(prefixSum - givenSum)) {
            len = i - map.get(prefixSum - givenSum);
            maxLen = Math.max(len, maxLen);
        }
        else map.set(prefixSum, i);
    }
    return maxLen;
}

let array = [5, 8, -4, -4, 9, -2, 2];
let givenSum = 0;
console.log(`naive solution: ${naiveSolution(array, givenSum)}`);
console.log(`optimal solution: ${optimalSolution(array, givenSum)}`);