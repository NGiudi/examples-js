import React from "react";

/* Set te permite crear una lista de valores sin duplicados, se puede utilizar en el lugar de arrays.
   Un set cuando manejar muchos datos suele ser mucho mmás rápido que manejar un array o un objeto.
*/

const SetExample = () => {
  const carrito = new Set();

  /* Forma de agregar elementos. */
  carrito.add("camisa");
  carrito.add("remera");

  /* Forma de eliminar elementos.
    Este método devuelve un valor booleano que identifica si pudo o no eliminar ese elemento,
    o sea, que si se trata de eliminar un elemento que no existe, nos devolvera un valor false.
  */
  const success = carrito.delete("camisa");

  /* Forma de  eliminar todos los elementos. */
  carrito.clear();

  /* Forma de saber la cantidad de elementos dentro del set. */
  const length = carrito.size;
  console.log(length);

  /* Forma de buscar si existe un elemento dentro del set. */
  const hasCamisa = carrito.has("camisa");

  return (
    <>
      <h1>Teoría sobre Set</h1>
      <p>Se elimino &quot;camisa&quot; con éxito? {success ? "Sí" : "No"}</p>
      <p>
        Existe el elemento &quot;camisa&quot; dentro del Set?{" "}
        {hasCamisa ? "Sí" : "No"}
      </p>
    </>
  );
};

export default SetExample;
