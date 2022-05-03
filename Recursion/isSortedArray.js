function isSortedArray(arr, i) {
    if (i == arr.length - 1) { //base case
        return true;
    }

    let isSorted = isSortedArray(arr, i + 1);
    return isSorted && arr[i] <= arr[i + 1];
}
let arr = [1, 12, 14, 17, 220, 45, 47];
console.log(isSortedArray(arr, 0));