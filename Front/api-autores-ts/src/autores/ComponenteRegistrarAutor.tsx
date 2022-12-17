import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AutorRegistrarDTO } from "./autor.model";
import ComponenteFormularioAutores from "./ComponenteFormularioAutores";

export default function ComponenteRegistrarAutor() {
  const url = "https://localhost:44367/api-autores/autor";
  const history = useNavigate();
  async function RegistrarAutor(autor: AutorRegistrarDTO) {
    try {
      await axios.post(url, autor);
      history("/autores");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Registrar Genero</h1>
      <ComponenteFormularioAutores
        modelo={{
          nombre: "",
          estado: false,
        }}
        nombreboton="Registrar"
        cssboton="btn btn-primary"
        onSubmit={async (valores) => {
          await RegistrarAutor(valores);
        }}
      />
    </div>
  );
}
