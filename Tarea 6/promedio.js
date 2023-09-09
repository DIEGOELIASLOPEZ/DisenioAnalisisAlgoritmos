function calcularPromedio(arr) {

    const A = [4, 3, 5, 7, 7, 4, 1];
    let promedio = 0;

    if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                promedio += arr[i];
            } else {
                console.log("El arreglo tiene un número negativo, no puedo seguir calculando el promedio");
                break;
            }
        }
    } else {
        console.log("Arreglo vacío");
    }

    promedio /= arr.length;
    console.log(promedio);
}


