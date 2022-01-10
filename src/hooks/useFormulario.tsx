// Clase 27: custom hook de formulario

import { useState } from "react";

// Clase 27: creamos tipado genérico. La T es un estándar
const useFormulario = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  //   Para que el formulario solo modifique un campo contenido en el objeto T:
  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return { ...state, onChange, formulario: state };
};

export default useFormulario;
