/*
Convierte la función calcularIMC en una arrow function 
y asigna la función anónima resultante a una variable llamada calcularIMCArrow.
*/

let calcularIMC=(pesokilogramos:number, alturaMetros:number): string =>{
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