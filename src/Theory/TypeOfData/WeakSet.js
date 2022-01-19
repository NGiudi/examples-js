/* Weak es similar al set pero unicamente se puede agregar objetos. 
   A diferencia de Set, aquí no tenemos la propiedad size y no es iterable. */

export const theoryWeakSet = () => {
  const personas = new WeakSet();

  const persona_1 = {
    apellido: "giudice",
    nombre: "nicolás",
  };

  const persona_2 = {
    apellido: "giudice",
    nombre: "gustavo",
  };

  /* Forma de agregar elementos al WeakSet. */
  personas.add(persona_1);
  personas.add(persona_2);
  console.log(`Contenido del weakSet: ${personas}`);

  /* Forma de eliminar elementos al  WeakSet */
  personas.delete(persona_1);
  console.log(`Nicolás eliminado, el valor de WeakSet es: ${personas}`);

  /* Si tratamos de agregar otro tipo de elemento que no sea objetos, nos saltara un error. */
  // personas.add("juan");
};
