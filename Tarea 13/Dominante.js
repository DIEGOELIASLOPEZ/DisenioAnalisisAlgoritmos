class Dominante {
    constructor() {}

    muestraArreglo(a) {
        console.log(a.join(", ") + ".");
    }

    dominante(a) {
        let b = new Array(a.length);
        let k = 0;
        let dominantElements = new Array(k);

        for (let i = 0; i < a.length; i++) {
            if (i === a.length - 1 || a[i] > a[i + 1]) {
                b[k] = a[i];
                k++;
            }
        }

        
        for (let i = 0; i < k; i++) {
            dominantElements[i] = b[i];
        }

        return dominantElements;
    }
}

const dom = new Dominante();
const arreglo = [1, 21, 4, 7, 5];
dom.muestraArreglo(dom.dominante(arreglo));
