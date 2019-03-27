// Exercise 1
console.warn("EXERCISE 1");

let myName = "Santi";
console.log (myName);


// Exercise 2
console.warn("EXERCISE 2")

let age = 21;
console.log (age);

// Exercise 3

console.warn("EXERCISE 3");

let ignaciAge = 32;
let ageDiff = ignaciAge - age;

console.log(ageDiff);

// Exercise 4
console.warn("EXERCISE 4");

if(age >= 21){
    console.log("Older");
} else {
    console.log("Younger");
}





// Exercise 1 (funciones matriz)
console.warn("Excercise 1");

let names = ["Albert", "Gabri", "Raul", "Xavi", "Santi", "Oscar"];

console.log (names);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log (names [0]);
console.log (names[names.length-1]);



// Exercise 2 (funciones matriz)
console.warn("Excercise 2");

let ages = [18, 20, 19, 23, 25, 24];

for (let i = 0; i < ages.length; i++) {
    if(ages [i] % 2 == 0) {
        console.log ("El Numero " + ages [i] + " es Par")}
    }


// Exercise 3 (funciones matriz)
console.warn("Excercise 3");

function numeroMinimo (){
    let numeros = [3, 33, 45, 21, 10, 24, 78, 99, 35];
    let numeroMasBajo = Math.min.apply(null, numeros);
    console.log (numeroMasBajo);
}

// Exercise 4 (funciones matriz)
console.warn("Excercise 4");

function numeroMaximo (){
    let numeros = [3, 33, 45, 21, 10, 24, 78, 99, 35];
    let numeroMasAlto = Math.max.apply(null, numeros);
    console.log (numeroMasAlto);
}

// Exercise 5 (funciones matriz)
console.warn("Excercise 5");

function buscar () {
    let buscarValor = [67, 42, 78, 3, 33, 45, 21, 10, 24, 78, 99, 35];
    let segundoNumero = 1;
    console.log(buscarValor [segundoNumero]);   
}

// Exercise 6 (funciones matriz)
console.warn("Excercise 6");

function repite (){
    var elementos = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
    var repetidos = [];
    var temporal = [];
    
    elementos.forEach((value,index)=>{
      temporal = Object.assign([],elementos);
      temporal.splice(index,1); 
      if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1)      repetidos.push(value);
    });
    console.log(repetidos);
}

// Exercise 7 (funciones matriz)
console.warn("Excercise 7");

function juntarColores() {
   let myColor = ["Red", "Green", "White", "Black"];
   console.log(myColor.join());
}




// Exercise 1 (funciones cadena)
console.warn("Excercise 1");

console.log ("32443".split("").reverse().join(""));

// Exercise 2 (funciones cadena)
console.warn("Excercise 2");

console.log ("webmaster".split("").sort().join(""));

// Exercise 3 (funciones cadena)
console.warn("Excercise 3");

console.log("principe de persia".replace(/\b[a-z]/g,c=>c.toUpperCase()));

// Exercise 4 (funciones cadena)
console.warn("Excercise 4");

function PalabraMasLarga(s) {
    let palabra_mas_grande = ""
    let palabras = s.split(" "); //replace usado para eliminar "," de las palabras.
    palabras.forEach(function(palabra){
    if (palabra.length > palabra_mas_grande.length){
         palabra_mas_grande = palabra
     };
    });
    return palabra_mas_grande 
  };
  
  console.log(PalabraMasLarga("Tutorial de desarrollo web en Torremolinos"));