Ciao ragazzi, Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Numero minimo di push: 5 (solo parte obbligatoria)
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


<!-- SUDDIVIDO IL PROBLEMA IN SOTTOPROBLEMI -->

1 - Creo un ciclo for nel quale costruisco un iterazione per una variabile contatore
1.1 - Dichiaro la variabile contatore e le assegno un valore (let i = 1)
1.2 - Applico alla variabile contatore una condizione di fine ciclo (1 <= 100)
1.3 - Applico un incremento di un'unità alla variabile contatore (i++)
2 - Creo una condizione if nel for per vedere se il numero che sto iterando è multiplo di 3 e di 5
2.1 - Se la condizione risulta vera allora faccio stampare in console la parola FizzBuzz invece del numero
3 - Creo una condizione if nel for per vedere se il numero che sto iterando è multiplo di 3
3.1 - Se la condizione risulta vera allora faccio stampare in console la parola Buzz invece del numero
4 - Creo una condizione if nel for per vedere se il numero che sto iterando è multiplo di 5
4.1 - Se la condizione risulta vera allora faccio stampare in console la parola Fizz invece del numero