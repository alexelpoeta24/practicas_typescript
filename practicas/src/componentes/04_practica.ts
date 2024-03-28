
/*Escribe una función calcularIMC que tome dos parámetros: peso en kilogramos (tipo number) 
y altura en metros (tipo number). La función debe calcular el Índice de Masa Corporal (IMC) 
y devolver una cadena que indique la categoría de peso según el IMC calculado.*/

function calcularIMC(pesokilogramos:number, alturaMetros:number): string{
let result:any=  Math.round((pesokilogramos / (alturaMetros * alturaMetros)));
return String(result);

}

let nombre = prompt("Cual es su Nombre?");

let peso:any = prompt(nombre + ". Su Peso en (Kilogramos).");

let altura:any = prompt(nombre + ". Su Altura en (Metros).");

let imcCalcular = calcularIMC(peso,altura);

let respuesta=nombre + " el imc calculado es: " +imcCalcular;
    alert(respuesta)
    console.log(respuesta);



export{};