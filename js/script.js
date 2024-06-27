// Creo un ciclo for nel quale costruisco un iterazione per una variabile contatore

for (let i = 1; i <= 100; i++){
    // Se è sia multiplo di 3 che di 5 allora stampa "FizzBuzz" al posto del numero 
    if(i % 3 == 0 && i % 5 == 0){
        console.log( `FizzBuzz`);
    }
    // Se è  multiplo di 3  allora stampa "Fizz" al posto del numero 
    else if(i % 3 == 0 ){
        console.log( `Fizz`);
    }
    // Se è  multiplo di 5  allora stampa "Buzz" al posto del numero 
    else if(i % 5 == 0){
        console.log( `Buzz`);
    }
    // Sennò stampa il numero 
    else{
        console.log(`${i}`);
    }
}
