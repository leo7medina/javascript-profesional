console.log('Hello, Typescript');


function add(a: number, b: number) {
  return a + b;  
}


// TIPOS DE VARIABLES

//boolean
let muted: boolean = false;
muted = true;

//Numeros
let numerador = 42;
let denominador = 6;
let resultado = numerador / denominador;


//Arreglos
let people: string[] = [];
people = ['Isabel', 'Maria'];
people.push('juan');

let peopleAndNumbers: Array<string | number>;
peopleAndNumbers.push('Hola');
peopleAndNumbers.push(1);

//enums 

enum Color {
    Rojo = 'rojo',
    Verde = 'verde',
    Azul = 'azul',
    Amarillo = 'amarillo'
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);








