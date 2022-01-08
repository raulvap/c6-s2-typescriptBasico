export const TiposBasicos = () => {
  // Clase 11: tipos
  //   let nombre: string | number = "Raul";
  //   nombre = 123;

  const nombre: string = "Raul";
  nombre.toUpperCase();

  const edad: number = 35;
  const estadoActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "nuevo"];

  return (
    <>
      <h2>Tipos Básicos</h2>
      <hr />
    </>
  );
};
