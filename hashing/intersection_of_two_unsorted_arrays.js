// Intersection of two unsorted arrays. Print in the order of 1st array.

const naiveSolution = function (array1, array2) {
    console.log(`array1: ${array1}`);
    console.log(`array2: ${array2}`);
    let combined = [];
    for (let i of array1) {
        for (let j of array2) {
            if (i == j) {
                combined.push(i);
                break;
            }
        }
    }
    return combined;
}

const optimalSolution = function (array1, array2) {
    let set = new Set(array2);
    let combined = [];
    for (let i of array1) {
        if (set.has(i)) {
            combined.push(i);
        }
    }
    return combined;
}

let array1 = [10, 30];
let array2 = [10, 50, 30];

let ans = naiveSolution(array1, array2);
console.log(ans);

let ans2 = optimalSolution(array1, array2);
console.log(ans2);