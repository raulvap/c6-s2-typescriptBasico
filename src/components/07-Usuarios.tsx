import React, { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes.interface";

const UsuariosComponent = () => {
  // Clase 20: usando peticiones HTTP - AXIOS

  //  El useState será de tipo usuarios, que es de la inteface que creamos: (clase 21)
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Clase 23: useRef nos ayuda a ver si hay cambios, es como un disparador si cambia el valor o no
  const paginaRef = useRef(1);

  // console.log(usuarios);

  useEffect(() => {
    /* En la clase 23, sacamos del useEffect la llamada al APi a una función
    Esto nos permite hacerla async:
    // llamamos al API
    reqResApi
      // El get será del tipo de interface que creamos: (clase 21)
      .get<ReqResListado>("/users")
      .then((resp) => {
        setUsuarios(resp.data.data);
      })
      // .catch(err => console.log(err)) es lo mismo que:
      .catch(console.log);
    */
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
      paginaRef.current++;
    } else {
      alert("No hay mas registros");
    }
  };

  const renderItem = ({
    id,
    avatar,
    first_name,
    last_name,
    email,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img
            src={avatar}
            alt={`${first_name} ${last_name} `}
            style={{
              width: 45,
              borderRadius: 100,
            }}
          />
        </th>
        <th>
          {first_name} {last_name}{" "}
        </th>
        <th>{email} </th>
      </tr>
    );
  };

  return (
    <>
      <h2>Usuarios</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {usuarios.map(item=> renderItem(item))} esto es lo mismo que: */}
          {usuarios.map(renderItem)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguientes
      </button>

      <hr />
    </>
  );
};

export default UsuariosComponent;
