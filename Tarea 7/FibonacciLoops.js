const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function FibonacciLoops(limite) {
    let a = 0;
    let b = 1;

    if (limite === 0) {
        return 0;
    } else if (limite === 1) {
        return 1;
    }

    let c;

    for (let i = 2; i <= limite; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

rl.question('Ingrese el límite para la serie de Fibonacci: ', (limite) => {
    const resultado = FibonacciLoops(parseInt(limite));
    console.log(`El resultado es: ${resultado}`);
    rl.close();
});