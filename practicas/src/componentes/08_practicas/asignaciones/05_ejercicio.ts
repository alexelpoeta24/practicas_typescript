/*
Tienes un objeto que representa una dirección. Utiliza la desestructuración para extraer la calle
 y la ciudad, pero renombra las variables a nombreCalle y nombreCiudad.

const direccion = { calle: 'Av. Siempre Viva', ciudad: 'Springfield', pais: 'EE.UU.' };
 Desestructura y renombra las variables calle y ciudad a nombreCalle y nombreCiudad 
  Imprime nombreCalle y nombreCiudad
*/
const direccion = { calle: 'Av. Siempre Viva', ciudad: 'Springfield', pais: 'EE.UU.' };

function change(nombreCalle: string, nombreCiudad: string):void{

    let {calle, ciudad, pais} = direccion;
    calle = nombreCalle;
    ciudad = nombreCiudad;

    console.log(calle);
    console.log(ciudad);
    console.log(pais);

}

change('400 141th street', 'ocean city');
export{}