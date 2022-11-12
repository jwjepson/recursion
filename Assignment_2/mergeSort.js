function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
}


function merge(a, b) {
    let i = 0;
    let j = 0;
    let c = [];
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i]);
            i++;
        } else {
            c.push(b[j])
            j++;
        }
    }

    for (i; i < a.length; i++) {
        c.push(a[i]);
    }
    for (j; j < b.length; j++) {
        c.push(b[j]);
    }
    return c;
}

console.log(mergeSort([7,1,10,65,5,3]));