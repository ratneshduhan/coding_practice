const arr = [2, 4, 5, 3, 1];
console.log(`arr: ${arr}`);

const reverse_sort = function (arr) {
    cost = 0;
    for (i = 0; i < arr.length - 1; i++) {
        minIndex = arr.slice(i, arr.length).reduce((r, v, index, a) => v <= a[r] ? index : r, 0) + i;
        cost = cost + (minIndex - i + 1)
        reverse_array(arr, i, minIndex);
        console.log(`arr: ${arr}, cost; ${cost}`);
    }
}
const reverse_array = function (arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

reverse_sort(arr);
console.log(`arr: ${arr}`);