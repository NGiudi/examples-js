/* Set te permite crear una lista de valores sin duplicados, se puede utilizar en el lugar de arrays.
   Un set cuando manejar muchos datos suele ser mucho mmás rápido que manejar un array o un objeto.
*/

export const theorySet = () => {
  const carrito = new Set();

  /* Forma de agregar elementos. */
  carrito.add("camisa");
  carrito.add("remera");

  /* Forma de eliminar elementos.
    Este método devuelve un valor booleano que identifica si pudo o no eliminar ese elemento,
    o sea, que si se trata de eliminar un elemento que no existe, nos devolvera un valor false.
  */
  const success = carrito.delete("camisa");
  console.log(`Se ha eliminado camisa del carrito? ${success}`);

  /* Forma de  eliminar todos los elementos. */
  carrito.clear();
  console.log(`carrito.clear: ${carrito}`);

  /* Forma de saber la cantidad de elementos dentro del set. */
  const length = carrito.size;
  console.log(`cantidad de elementos en el set ${length}`);

  /* Forma de buscar si existe un elemento dentro del set. */
  const hasCamisa = carrito.has("camisa");
  console.log(`carrito contiene caamisa? ${hasCamisa}`);
};
