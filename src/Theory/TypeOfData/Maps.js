/* El Map es como un objeto pero los campos y las claves pueden ser de cualquier tipo de dato.
   Tiene mejor performance que un objecto y están pensados para agregar o quitar elementos 
   o para recorrerlos.
*/
export const theoryMap = () => {
  const cliente = new Map();

  cliente.set("nombre", "Karen");
  cliente.set("tipo", "premium");
  cliente.set("saldo", 3000);

  console.log(cliente.has("nombre"));

  /* Forma de ver la cantidad de elementos que tenemos dentro del Map. */
  console.log(cliente.size);

  /* Forma de ver si contiene un valor dentro del map.  */
  console.log(cliente.has("nombre"));
  console.log(cliente.has("nombre2"));

  /* Forma de agarrar un elemento dentro del Map */
  console.log(cliente.get("nombre"));

  /* Forma de eliminar todos los elementos del Map */
  cliente.clear();
};
