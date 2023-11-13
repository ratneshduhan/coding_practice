// count frequency of elements in an array

function count_frequency_optimal(array) {
    let map = new Map();

    for (let i of array) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else
            map.set(i, 1);
    }

    map.forEach((value, key) => console.log(`key: ${key}, freq: ${value}`));
}

function count_frequency(array) {
    let visited = new Array(array.length).fill(false);
    for (let i = 0; i < array.length; i++) {

        if (visited[i])
            continue;

        let count = 1;
        for (let j = i + 1; j <= array.length; j++) {
            if (array[i] == array[j]) {
                visited[j] = true;
                count++;
            }
        }
        console.log(`Freq of ${array[i]}: ${count}`);
    }
}

let array = [1, 2, 3, 4, 5, 3, 7, 8, 4, 7, 1, 4, 2, 4, 9];
count_frequency_optimal(array);
count_frequency(array);