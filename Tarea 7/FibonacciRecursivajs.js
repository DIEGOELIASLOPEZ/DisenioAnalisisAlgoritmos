const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacciRecursiva(limite) {
    if (limite < 3) {
        return 1;
    }
    return fibonacciRecursiva(limite - 1) + fibonacciRecursiva(limite - 2);
}

rl.question('Ingrese el límite para la serie de Fibonacci: ', (limite) => {
    const resultado = fibonacciRecursiva(parseInt(limite));
    console.log(`La serie de Fibonacci hasta el ${limite}-ésimo término es: ${resultado}`);
    rl.close();
});