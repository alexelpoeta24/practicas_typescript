/*
Escribe una función crearListaDeCompra que tome un número indefinido de argumentos de tipo
 string que representan los artículos de la lista de compra. La función debe devolver un objeto
 que contenga los artículos como propiedades con valores booleanos que indiquen si el artículo 
 ha sido comprado (inicialmente false para todos).
*/

function crearListaDeCompra(...articulos: string[]): { [articulo: string]: boolean } {
  let listaDeCompra: { [key: string]: boolean } = {};
  articulos.forEach((articulo) => {
    listaDeCompra[articulo] = false;
  });
  return listaDeCompra;
}
console.log(crearListaDeCompra("mango", "pera", "uva"));

export{};