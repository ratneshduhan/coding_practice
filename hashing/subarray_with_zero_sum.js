// Sub array with zero sum

const naiveSolution = function (array) {
    for (let i = 0; i < array.length; i++) {
        let currentSum = 0;
        for (let j = i; j < array.length; j++) {
            currentSum += array[j];
            if (currentSum == 0) {
                // console.log(i,j);
                return true;
            }
        }
    }
    return false;
}

const optimalSolution = function (array) {
    let set = new Set();
    let prefixSum = 0;
    for (let i = 0; i < array.length; i++) {
        prefixSum += array[i];
        if (set.has(prefixSum))
            return true;
        else if (prefixSum == 0)
            return true;
        else set.add(prefixSum);
    }
    return false;
}

let array = [1, 4, 13, -3, -10, 5];
console.log(`naive solution: ${naiveSolution(array)}`);
console.log(`optimal solution: ${optimalSolution(array)}`);