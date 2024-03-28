/*
Ejercicio 3: Desestructuración de Objetos Anidados
Dado el siguiente objeto que representa un estudiante, 
utiliza la desestructuración para extraer el nombre del estudiante y el nombre de la universidad.

const estudiante = { nombre: 'Ana', edad: 22, universidad: 
{ nombre: 'Universidad de Buenos Aires', ciudad: 'Buenos Aires' } };
 Desestructura y asigna el nombre del estudiante y el nombre de la universidad a variables 
 Imprime el nombre del estudiante y el nombre de la universidad
*/

const estudiante = {
  nombre: "Ana",
  edad: 22,
  universidad: {
    nombre: "Universidad de Buenos Aires",
    ciudad: "Buenos Aires",
  },
};

let nombre= estudiante.nombre;
let universidad= estudiante.universidad.nombre;

console.log(nombre);
console.log(universidad);

export {};
