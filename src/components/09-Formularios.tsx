import useFormulario from "../hooks/useFormulario";

const Formularios = () => {
  const { formulario, email, password, onChange } = useFormulario({
    email: "",
    password: "",
  });

  return (
    <>
      <h2>Formularios</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => onChange(e.target.value, "email")}
      />
      <input
        type="password"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(formulario, null, 2)} </pre>
      </code>
    </>
  );
};

export default Formularios;
