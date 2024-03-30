/*
Define una interfaz Producto que incluya las siguientes propiedades: nombre (string), precio (number),
 categoria (string), y stock (number).
*/

/*
Crea una función llamada presentarProducto que acepte un objeto de tipo Producto como argumento.
*/
/*Dentro de la función, utiliza la desestructuración para extraer las propiedades nombre, precio, y categoria del objeto producto.

La función deberá imprimir una frase que describa el producto, por ejemplo: "El producto [nombre] de la categoría [categoria] tiene un precio de $[precio]."

Llama a la función presentarProducto con un objeto producto de ejemplo y verifica que la salida sea la esperada.
*/

// Define la interfaz Producto
interface Producto {
    nombre: string;
    precio: number;
    categoria: string;
    stock: number;
}

function presentarProducto(producto: Producto): void {
    const { nombre, precio, categoria } = producto;
    console.log(`El producto ${nombre} de la categoría ${categoria} tiene un precio de $ ${precio}.`);
}

const productoEjemplo: Producto = {
    nombre: "Zapatillas deportivas",
    precio: 89.99,
    categoria: "Calzado",
    stock: 50
};


presentarProducto(productoEjemplo);



export{}