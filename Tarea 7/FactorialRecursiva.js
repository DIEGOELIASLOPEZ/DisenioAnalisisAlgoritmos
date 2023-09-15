function factorialRecursiva(numero){
    if(numero<2){
        return 1;

    }
    return numero * factorialRecursiva(numero-1)

}