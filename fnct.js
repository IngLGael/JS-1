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
const result2 = document.getElementById('result2');

inputFar.addEventListener('input', () => {
  const F = parseFloat(inputFar.value);
  const C = isNaN(F) ? 'Entrada Invalida' : (F - 32) * 5/9;
  result2.innerHTML = C.toFixed(2);
});

/*
3. Calculador de propina para restaurante
Guarda en variables la cantidad que gastó un cliente en un restaurante, en otra el 10% de propina, suma la cuenta total y concatena en una oración la info: "El cliente gasto: , La propina total es: , El total es: " Escribe tu código abajo
*/
const consumoHTML = document.getElementById('consumo');
const result3 = document.getElementById('result3');

consumoHTML.addEventListener('input', () => {
  const consumo = parseFloat(consumoHTML.value);
  const cuentaTotal = isNaN(consumo) ? 'Entrada no Valida' : consumo  + (consumo *.10);
  result3.innerHTML = cuentaTotal.toFixed(2);

})

/*
4. Ejercicio libre
Simula un ejercicio similar a los 3 enteriores para desplegar el resultado que tu quieras. Escribe tu código abajo
*/
const fechaInput = document.getElementById('fechaHTML')
const fecha = new Date(); 

function calcularEdad() {
  const fechaNac = new Date(fechaInput.value);
  const edad =  isNaN(fechaNac) ? 'Entrada no valida': fecha.getFullYear() - fechaNac.getFullYear();
  document.getElementById('result4').innerHTML = edad;
  }

/*
5. Ejercicio libre
Simula un ejercicio similar a los 3 enteriores para desplegar el resultado que tu quieras. Escribe tu código abajo
*/
const inputIVA = document.getElementById('inputIVA');
const result5 = document.getElementById('result5');

inputIVA.addEventListener('input', () => {
  const producto = parseFloat(inputIVA.value);
  const fIVA = isNaN(producto) ? 'Entrada no Valida' : producto *.16;
  result5.innerHTML = fIVA.toFixed(2);

})


/*
6. Arrays
Crea un array en una variable con los datos de tu elección, tiene que contener 10 y pueden ser de los tipos que elijas. Guarda en una variable la posición 5 y despliegala en el resultado. Escribe tu código abajo
*/
//edades en mi familia, la mia sera mostrada 
const edades = [6, 10, 42, 39, 40, 23, 65, 61, 50, 69]
let miEdad = edades[5]
document.getElementById('result6').innerHTML = miEdad;


/*
7. Arrays
Crea un array en una variable con los tus canciones favoritas, despues reemplaza una con un nuevo valor. Guarda una en una variable y despliegala en el resultado. Escribe tu código abajo
*/
const songsFav = ["vuelve", "Gata Only", "Eskeleto", "Daytona"]
songsFav[0] = "Tuss"
const mSongFav = songsFav[2]
document.getElementById('result7').innerHTML = mSongFav;

/*
8. Objects
Crea un object que represente alguna cosa del mundo real con sus distintas propiedades, reemplaza el valor de una propiedad por uno nuevo y despliega en el resultado el valor de alguna de las propiedades. Escribe tu código abajo
*/
let pc = {brand:"predator", ram:16, ssd:512, color:"black w/ red" }
pc.color = "white"
document.getElementById('result8').innerHTML = pc.brand;

/*
9. Objects
Crea un array de objects con elementos que tengan relacion y con sus propiedades, por ejemplo, paises, una wishlist, bandas de musica, etc. Despliega cualquier valor de alguna de las propiedades de los objetos Escribe tu código abajo
*/
const tiendaDep = [
  pc = {brand:"predator", ram:16, ssd:512, color:"black w/ red" },
  car = {brand:"VW", model:"jetta", year:2020},
  tv = {brand:"samsung", price:1500, width:45}

]

document.getElementById('result9').innerHTML = tiendaDep[1].model;