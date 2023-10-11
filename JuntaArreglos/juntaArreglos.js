function mergeSortedArrays(a, b) {
    let i = 0, j = 0;
    const c = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i]);
            i++;
        } else {
            c.push(b[j]);
            j++;
        }
    }

    while (i < a.length) {
        c.push(a[i]);
        i++;
    }

    while (j < b.length) {
        c.push(b[j]);
        j++;
    }

    return c;
}

const a = [1, 5, 7, 9, 11];
const b = [3, 4, 9, 10];
const c = mergeSortedArrays(a, b);

console.log("Arreglo c ordenado:");
console.log(c);