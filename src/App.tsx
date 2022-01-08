import { TiposBasicos } from "./typescript/01-TiposBasicos";
import ObjetosLiterales from "./typescript/02-ObjetosLiterales";
import Funciones from "./typescript/03-Funciones";
import Contador from "./components/04-hooks";
import CustomHook from "./components/05-customHook";
import Login from "./components/06-Login";

function App() {
  return (
    <div className="mt-2">
      <h1>Introduccón a React con TypeScript</h1>
      <hr />
      <TiposBasicos />
      <ObjetosLiterales />
      <Funciones />
      <Contador />
      <CustomHook />
      <Login />
    </div>
  );
}

export default App;
