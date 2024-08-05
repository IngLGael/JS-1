/*EJERCICIOS JS I
INSTRUCCIONES: 
Resuelve cada uno de los ejercicios presentados a continuación y guarda tu resultado en una variable, esa variable colocala en la ultima linea de cada ejercicio al final de la expresión "document.getElementById('result').innerHTML = " para que pueda reflejarse en el HTML*/

//POR EJEMPLO:

let example = "Reemplazame";
document.getElementById('example').innerHTML = example;

// Todos los resultados tendran la variable example como valor para evitar errores en el código, reemplazala con tus propias variables

/*
1. Presentate en un parrafo.
Guarda en variables la siguiente información: tu nombre, edad, de donde eres y to hobby favorito y presentalos en una oración concatenando strings. Escribe tu código abajo
*/
let nombre = "Luis Gael Gallegos";
let pais = "Mexico"
const hobbies = ["programar", " salir con amigos", " salir a la calle"]
let presentacion = "Mi nombre es " + nombre + ", soy de "+ pais +", mis hobbies son " + hobbies;
document.getElementById('result1').innerHTML = presentacion;


/*
2. Convertidor de grados Farenheit a Celcius.
Guarda los grados F en una variable y realiza las operaciones necesarias para convertirlos a C en una variable nueva. Escribe tu código abajo
*/

const inputFar = document.getElementById('gradFar');
const resultElement = document.getElementById('result2');

inputFar.addEventListener('input', () => {
  const F = parseFloat(inputFar.value);
  const C = isNaN(F) ? 'Invalid input' : (F - 32) * 5/9;
  resultElement.innerHTML = C.toFixed(2);
});

/*
3. Calculador de propina para restaurante
Guarda en variables la cantidad que gastó un cliente en un restaurante, en otra el 10% de propina, suma la cuenta total y concatena en una oración la info: "El cliente gasto: , La propina total es: , El total es: " Escribe tu código abajo
*/
const consumo = document.getElementById('consumo');
document.getElementById('result3').innerHTML = example;

/*
4. Ejercicio libre
Simula un ejercicio similar a los 3 enteriores para desplegar el resultado que tu quieras. Escribe tu código abajo
*/

document.getElementById('result4').innerHTML = example;

/*
5. Ejercicio libre
Simula un ejercicio similar a los 3 enteriores para desplegar el resultado que tu quieras. Escribe tu código abajo
*/

document.getElementById('result5').innerHTML = example;


/*
6. Arrays
Crea un array en una variable con los datos de tu elección, tiene que contener 10 y pueden ser de los tipos que elijas. Guarda en una variable la posición 5 y despliegala en el resultado. Escribe tu código abajo
*/

document.getElementById('result6').innerHTML = example;


/*
7. Arrays
Crea un array en una variable con los tus canciones favoritas, despues reemplaza una con un nuevo valor. Guarda una en una variable y despliegala en el resultado. Escribe tu código abajo
*/

document.getElementById('result7').innerHTML = example;

/*
8. Objects
Crea un object que represente alguna cosa del mundo real con sus distintas propiedades, reemplaza el valor de una propiedad por uno nuevo y despliega en el resultado el valor de alguna de las propiedades. Escribe tu código abajo
*/

document.getElementById('result8').innerHTML = example;

/*
9. Objects
Crea un array de objects con elementos que tengan relacion y con sus propiedades, por ejemplo, paises, una wishlist, bandas de musica, etc. Despliega cualquier valor de alguna de las propiedades de los objetos Escribe tu código abajo
*/

document.getElementById('result9').innerHTML = example;