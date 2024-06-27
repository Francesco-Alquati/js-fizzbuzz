// Creo un ciclo for nel quale costruisco un iterazione per una variabile contatore

for (let i = 1; i <= 100; i++){
    // Se è sia multiplo di 3 che di 5 allora stampa "FizzBuzz"
    if(i % 3 == 0 && i % 5 == 0){
        console.log( `FizzBuzz`)
    }
    // Se è  multiplo di 3  allora stampa "Fizz"
    else if(i % 3 == 0 ){
        console.log( `Fizz`)
    }
    
}

