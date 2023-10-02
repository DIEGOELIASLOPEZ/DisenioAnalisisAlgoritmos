const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Cadena: ', (cadena) => {
  const longitudCadena = cadena.length;
  let tildes = 0;

  for (let i = 0; i < longitudCadena; i++) {
    const caracter = cadena.charAt(i);
    if (
      caracter === 'á' || caracter === 'é' || caracter === 'í' ||
      caracter === 'ó' || caracter === 'ú' || caracter === 'Á' ||
      caracter === 'É' || caracter === 'Í' || caracter === 'Ó' ||
      caracter === 'Ú'
    ) {
      tildes++;
    }
  }

  console.log(tildes);

  rl.close();
});