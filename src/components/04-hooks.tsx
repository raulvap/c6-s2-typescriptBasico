// Clase 14: hooks con TS
import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState<number>(0);

  const acumular = (numero: number) => {
    setContador(contador + numero);
  };

  return (
    <>
      <hr />
      <h2>Contador: {contador} </h2>
      <button className="btn btn-primary" onClick={() => acumular(+1)}>
        +1
      </button>
      {/* Caracter de espacio: */}
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};

export default Contador;
