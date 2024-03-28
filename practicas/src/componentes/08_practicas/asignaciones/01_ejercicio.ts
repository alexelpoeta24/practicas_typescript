//Practica 8: Desestructuración en TypeScript

//Ejercicio 1: Desestructuración Básica de Arreglos
/*
Dado el siguiente arreglo de colores, utiliza la desestructuración para asignar los tres primeros colores
 a variables individuales y luego imprime estas variables.

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Morado']; // Desestructura y asigna los tres primeros colores a variables // Imprime las variables
*/

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Morado'];
const [rojo, verde, azul] = colores;
console.log(rojo);
console.log(verde);
console.log(azul);


export{};