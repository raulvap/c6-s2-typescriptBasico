import { useState, useEffect, useReducer } from "react";

// creamos la interface para definir el tipo de retorno del authReducer:
interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

// Cómo hacer el estado inicial:
const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

/* type e interface hacen lo mismo, sin embargo para definir el tipo de "action" usamos un type
porque no los vamos a expandir, son objetos planos
*/
// Clase 19: definimos el tipo de payload que vamos a recibir en el login
type LoginPayload = {
  username: string;
  nombre: string;
  token: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

// creamos el reducer con el tipado de AuthState:
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  // Clase 18: creamos el reducer:
  // el state jamas debe de mutar, no debe crear uno nuevo.

  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };

    case "login":
      // se puede usar cualquiera de las siguientes formas:
      const { nombre } = action.payload;
      return {
        validando: false,
        token: action.payload.token,
        username: action.payload.username,
        nombre: nombre,
      };

    default:
      return state;
  }
};

const Login = () => {
  // Clase 17: usamos useReducer
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [userData, setUserData] = useState({
    token: "abc123",
    username: "raulvap",
    nombre: "Raul Vap",
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 2000);
  }, []);

  if (state.validando) {
    return (
      <>
        <h2>Login</h2>

        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  const login = () => {
    dispatch({ type: "login", payload: userData });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <>
      <h2>Login </h2>
      <span>
        <i> (usando useReducer) </i>
      </span>

      {state.token ? (
        <div className="alert alert-success">Bienvenido {state.nombre}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {state.token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}

      <hr />
    </>
  );
};

export default Login;
