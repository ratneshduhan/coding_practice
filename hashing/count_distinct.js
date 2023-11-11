// find the count of distinct elements in an array.

function countDistinct(array) {
    let set = new Set(array);
    return set.size;
}

function listDistinct(array) {
    let set = new Set(array);
    let distinctArray = [];
    for (ele of set.values())
        distinctArray.push(ele);
    return distinctArray;
}

let array = [1, 3, 5, 7, 9, 2, 4, 4, 6, 3, 5, 3, 6, 4];
console.log(`Distinct count: ${countDistinct(array)}`);
console.log(`Distinct array: ${listDistinct(array)}`);
