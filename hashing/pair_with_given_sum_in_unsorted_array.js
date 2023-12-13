// Pair with given sum in unsorted array

const naiveSolution = function (array, sum) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == sum) {
                console.log('found')
                console.log(array[i], array[j]);
                return 'found';
            }
        }
    }
    return 'not found';
}

const optimalSolution = function (array, sum) {
    let set = new Set();
    for (let i of array) {
        if (set.has(sum - i)) {
            return 'found';
        } else {
            set.add(i);
        }
    }
    return 'not found';
}

let array = [8, 3, 9, 5];
let sum = 13;

let ans = naiveSolution(array, sum);
console.log(`naive solution: ${ans}`);
console.log(`optimal solution: ${optimalSolution(array, sum)}`);