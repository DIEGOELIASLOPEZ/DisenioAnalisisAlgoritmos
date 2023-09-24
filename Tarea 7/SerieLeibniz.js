const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPi(n) {
    let pi = 0.0;

    for (let i = 0; i < n; i++) {
        let termino = 1.0 / (2 * i + 1);
        if (i % 2 === 0) {
            pi += termino;
        } else {
            pi -= termino;
        }
    }

    pi *= 4.0;

    console.log(`Aproximación de π utilizando ${n} términos: ${pi}`);
}

rl.question("Ingrese la longitud (n) para calcular π: ", (n) => {
    calcularPi(parseInt(n));
    rl.close();
});