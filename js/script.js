console.log("hello world");

// Per oggi pomeriggio la vostra attività sarà:
// lo snack #3 fatto stamattina in aula, in versione ancora ES5;

//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
var arrayCasuale = [
  "roma",
  "pisa",
  "torino",
  "milano",
  "napoli",
  "ancona"
];

function arrayAB(array, a, b) {
  var nuovoArray = [];
  for (var i = a; i <= b; i++) {
    console.log([i]);
    nuovoArray.push(array[i])
  }
  return nuovoArray
}

console.log(arrayAB(arrayCasuale, 2, 5));

// vostre prove con le novità di ES6 viste stamattina.