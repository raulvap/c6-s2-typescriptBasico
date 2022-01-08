import useCounter from "../hooks/useCounter";
// Clase 15: custom Hooks

const ContadorCustomHook = () => {
  const { contador, acumular } = useCounter();

  return (
    <>
      <hr />
      <h2>Custom Hook </h2>
      <span>Contador: {contador}</span>
      <br />
      <button className="btn btn-primary" onClick={() => acumular(+1)}>
        +1
      </button>
      {/* Caracter de espacio: */}
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
      <hr />
    </>
  );
};

export default ContadorCustomHook;
