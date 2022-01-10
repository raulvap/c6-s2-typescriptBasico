import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes.interface";

const useUsuario = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Clase 23: useRef nos ayuda a ver si hay cambios, es como un disparador si cambia el valor o no
  const paginaRef = useRef(1);

  // console.log(usuarios);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  // Clase 23: creamos una páginación
  const cargarUsuarios = async () => {
    // clase 23: le mandamos en el 2do argumento, los params:
    const response = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });

    // ahora incrementamos la página:
    if (response.data.data.length > 0) {
      setUsuarios(response.data.data);
    } else {
      paginaRef.current--;
      alert("No hay mas registros");
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      cargarUsuarios();
    } else {
      alert("No hay mas registros");
    }
  };

  return { usuarios, paginaAnterior, paginaSiguiente };
};

export default useUsuario;
