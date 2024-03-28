/*
Escribe una función crearPerfilDeUsuario que tome tres parámetros: nombre (tipo string), 
edad (tipo number), y pais (tipo string, opcional con valor predeterminado "No especificado").
 La función debe devolver un objeto que represente el perfil del usuario.
*/

function crearPerfilDeUsuario(nombre:string, edad:number, pais:string = "No especificado"){
    return {
        nombre: nombre,
        edad: edad,
        pais: pais
    }
}
console.log(crearPerfilDeUsuario("alex",23));
export{};