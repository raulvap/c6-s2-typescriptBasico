import { Usuario } from "../interfaces/reqRes.interface";
import useUsuario from "../hooks/useUsuario";

const CustomHookUsuariosComponent = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuario();

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
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguientes
      </button>
      <hr />
    </>
  );
};

export default CustomHookUsuariosComponent;
