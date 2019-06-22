
//Tipos de Datos
// String => Letras o Cadenas de texto; "Texto"
// Number => 1,34, 9.0; 899
// Objetos => {
//     id: 23243423
//     //lave : valor
// }
// Arreglos => ["elemento1", "elemento2", "elemento3"]

//Var y Const
// let nombre = 343;
// var a = 0;
// const miConstante = "222";

// console.log(a);
// console.log(nombre);




// var a = "Arturo";
//  nombre = "arturo";
//  miConstante = "222";


// console.log(a);
// console.log(nombre);


//Operadores

//Matematicos
// + * - / %

// Logicos
// && = AND, \\ = OR ,! = NOT

// Comparacion
// > mayor que < menor que == igual a  != diferente de === estrictamente igual
// >= <= 

let a = 234;

if(a == "234") {
    console.log("si es igual");
}


// Hacer un programa que simule el juego de Piedra papel o tijeras
// con ifs

let jugador1 = prompt('Jugador 1 Escoge una Opcion');
let jugador2 = prompt('Jugador 2 Escoge una Opcion');
console.log(jugador1);
console.log(jugador2);

if(jugador1 == "papel" && jugador2 == "piedra"){
    console.log("Gana Jugador 1");
}
if(jugador1 === jugador2){
    console.log("Empate");
}
if(jugador1 == "piedra" && jugador2 == "papel"){
    console.log("Gana Jugador 2");
}
if(jugador1 == "tijeras" && jugador2 == "papel"){
    console.log("Gana Jugador 1");
}
if(jugador1 == "papel" && jugador2 == "tijeras"){
    console.log("Gana Jugador 2");
}
if(jugador1 == "tijeras" && jugador2 == "piedra"){
    console.log("Gana Jugador 2");
}
if(jugador1 == "piedra" && jugador2 == "tijeras"){
    console.log("Gana Jugador 1");
}
