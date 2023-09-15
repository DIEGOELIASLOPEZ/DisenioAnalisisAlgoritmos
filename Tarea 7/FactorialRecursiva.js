const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorialRecursiva(numero) {
    if (numero < 2) {
        return 1;
    }
    return numero * factorialRecursiva(numero - 1);
}

rl.question('Ingrese un número para calcular su factorial: ', (numero) => {
    const resultado = factorialRecursiva(parseInt(numero));
    console.log(`El factorial de ${numero} es: ${resultado}`);
    rl.close();
});