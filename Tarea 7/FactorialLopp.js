function factorial(numero){
    let factorial = 1;
    if( numero == 0){
        return 0;
    }
    for(let i = numero; i>0; i++ ){
        factorial = factorial(i);
    }
    return factorial;
}