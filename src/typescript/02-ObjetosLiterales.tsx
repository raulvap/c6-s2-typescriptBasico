// Interface es para tipar los objetos, para que TS sepa como lucen los objetos, las reglas de validación
interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  estado: string;
}

export const ObjetosLiterales = () => {
  // Clase 12: objetos literales
  const persona: Persona = {
    nombre: "Fernando",
    edad: 35,
    direccion: {
      pais: "Mexico",
      estado: "Jalisco",
    },
  };

  return (
    <>
      <h2>Objetos Literales</h2>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
      <hr />
    </>
  );
};

export default ObjetosLiterales;
