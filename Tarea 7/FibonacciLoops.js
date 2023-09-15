function FibonacciLoobs(limite) {

let a = 0;
let b = 1;
let c = 1;

if(limite <3){
    return 1;
}
   
for(let i = 2; i<=limite; i++){
    c = a + b;
    a = b;
    b = c;
}
return c

}