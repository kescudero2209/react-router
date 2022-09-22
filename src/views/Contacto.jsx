import { useState } from "react";
import Button from "react-bootstrap/Button";
const Contacto = () => {
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !email) {
      alert("Campos incompletos, favor ingresar datos");
      return;
    } else {
      alert("Información enviada con éxito!");
    }

    setDesc("");
    setEmail("");
  };
  return (
    <>
      <form
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <h1>Cuéntanos, ¿en qué podemos ayudarte?</h1>
        <label>Correo:</label>
        <input
          className="w-50"
          type="text"
          placeholder="Ingrese correo"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <label>Descripción:</label>
        <input
          className="w-50 description"
          type="text"
          placeholder="Ingrese descripción de su caso"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></input>
        <Button className="mt-3" type="submit" variant="primary">
          Enviar
        </Button>
      </form>
    </>
  );
};

export default Contacto;
