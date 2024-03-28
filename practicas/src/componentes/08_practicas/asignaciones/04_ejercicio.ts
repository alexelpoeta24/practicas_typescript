/*
Ejercicio 4: Desestructuración en Parámetros de Función
Escribe una función que acepte un objeto representando un coche 
y utilice la desestructuración en los parámetros para extraer y
 imprimir la marca y el modelo del coche.

const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 }; 
 Escribe una función que utilice la desestructuración para extraer 
 la marca y el modelo // Llama a la función con el objeto coche
*/
const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };
function coches(): string[] {
  return [coche.marca, coche.modelo];
}
console.log(coches());
export {};
