/* WeakMap  sirve para mantener datos privados. Al igual que el WeakSet, 
   WeakMap no es iterable, no tiene la propiedad size y solo acepta objetos. 
*/

export const theoryWeakMap = () => {
  const product = {
    id: 10,
  };

  const productList = new WeakMap();

  /* Forma de agregar elementos al WeakMap */
  productList.set(product, "Monitor");

  /* Forma de ver si se contiene un valor dentro del WeakMap */
  const exist = productList.has(product);
  console.log(exist);

  /* Forma de eliminar elementos al WeakMap */
  productList.delete(product);
  console.log(`productList luego de eliminar product: ${productList}`);
};
