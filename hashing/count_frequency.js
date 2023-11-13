// count frequency of elements in an array

function count_frequency(array) {
    let map = new Map();
    for (let i of array) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else map.set(i, 1);
    }
    map.forEach((value, key) => console.log(`key: ${key}, freq: ${value}`));
}

let array = [1, 2, 3, 4, 5, 3, 7, 8, 4, 7, 1, 4, 2, 4, 9];
console.log(`Frequencies of elements: ${count_frequency(array)}`);