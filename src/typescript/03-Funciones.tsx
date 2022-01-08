// Clase 13: funciones

const Funciones = () => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de 8 + 2 es {sumar(8, 2)}</span>
    </>
  );
};

export default Funciones;
