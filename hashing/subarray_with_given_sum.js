// Subarray with given sum

const naiveSolution = function (array, givenSum) {
    for (let i = 0; i < array.length; i++) {
        let currentSum = 0;
        for (let j = i; j < array.length; j++) {
            currentSum += array[j];
            if (currentSum == givenSum) {
                // console.log(i,j);
                return true;
            }
        }
    }
    return false;
}

const optimalSolution = function (array, givenSum) {
    let set = new Set();
    let prefixSum = 0;
    for (let i = 0; i < array.length; i++) {
        prefixSum += array[i];
        if (set.has(prefixSum-givenSum))
            return true;
        else if (prefixSum == givenSum)
            return true;
        else set.add(prefixSum);
    }
    return false;
}

let array = [5, 8, 6, 13, 3, -1];
let givenSum = 22;
console.log(`naive solution: ${naiveSolution(array, givenSum)}`);
console.log(`optimal solution: ${optimalSolution(array, givenSum)}`);