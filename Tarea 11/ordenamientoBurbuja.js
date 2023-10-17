// burbuja.js

function ordenamientoBurbuja(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar los elementos si están en el orden incorrecto
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

if (process.argv.length < 3) {
    console.log("Por favor, ingrese números separados por espacios.");
    process.exit(1);
}

const inputNumbers = process.argv.slice(2).map(Number);
console.log("Números desordenados:", inputNumbers);

ordenamientoBurbuja(inputNumbers);
console.log("Números ordenados:", inputNumbers);
