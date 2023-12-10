// Union of two unsorted arrays

const solution = function (array1, array2) {

    let set = new Set();
    for (let i of array1)
        set.add(i);
    for (let j of array2)
        set.add(j);
    return set;

}

let array1 = [10, 20, 30, 40];
let array2 = [10, 20, 50, 60];

let ans = solution(array1, array2);
console.log(ans.size, ans.values());

console.log([...ans].join(','));