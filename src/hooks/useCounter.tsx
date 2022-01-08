import { useState } from "react";

const useCounter = (inicial: number = 0) => {
  // Clase 15: creando custom hooks con TS
  const [contador, setContador] = useState<number>(inicial);

  const acumular = (numero: number) => {
    setContador(contador + numero);
  };

  return { contador, acumular };
};

export default useCounter;
