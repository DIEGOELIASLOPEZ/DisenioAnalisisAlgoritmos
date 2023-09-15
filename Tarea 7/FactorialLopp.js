const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(numero) {
    let result = 1;
    if (numero === 0) {
        return 1;
    }
    for (let i = numero; i > 0; i--) {
        result *= i;
    }
    return result;
}

rl.question('Ingrese un número para calcular su factorial: ', (numero) => {
    const resultado = factorial(parseInt(numero));
    console.log(`El factorial de ${numero} es: ${resultado}`);
    rl.close();
});