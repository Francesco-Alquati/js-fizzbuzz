// Recupero la lista dal DOM
// const list = document.getElementById('list');
const board = document.querySelector('.board');

// Creo un ciclo for nel quale costruisco un iterazione per una variabile contatore
for (let i = 1; i <= 100; i++){

    // let list_item = document.createElement('li');
    // list_item.innerText = `${i}`;

    const square = document.createElement('div');
    square.classList.add('square');
    
    // Se è sia multiplo di 3 che di 5 allora stampa "FizzBuzz" al posto del numero 
    if(i % 3 == 0 && i % 5 == 0){
        square.innerText = `FizzBuzz`;
        square.classList.add('bg-red');
    }
    // Se è  multiplo di 3  allora stampa "Fizz" al posto del numero 
    else if(i % 3 == 0 ){
        square.innerText = `Fizz`;
        square.classList.add('bg-green');
    }
    // Se è  multiplo di 5  allora stampa "Buzz" al posto del numero 
    else if(i % 5 == 0){
        square.innerText = `Buzz`;
        square.classList.add('bg-yellow');
    }
    // Sennò stampa il numero 
    else{
        square.innerText = `${i}`;
        square.classList.add('bg-blue');
    }
    board.append(square);
    // list.append(list_item);
}
