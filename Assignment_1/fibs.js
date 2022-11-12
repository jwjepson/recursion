function fibs(num) {
    const array = [0, 1];
    for (let i = 2; i < num; i++) {
        array[i] = array[i - 2] + array[i - 1];
    }
    return array;
}

function fibsRec(num, array = [0,1]) {
    if (num <= 2) {
        return array;
    }
    array.push(array[array.length - 2] + array[array.length - 1])
    return fibsRec(num - 1, array);
}

console.log(fibs(8));
console.log(fibsRec(8));