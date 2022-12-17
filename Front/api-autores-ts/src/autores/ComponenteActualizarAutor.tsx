import EditarEntidad from "../utilidad/ComponenteEditarEntidad";
import ComponenteFormularioAutores from "./ComponenteFormularioAutores";
import { AutorDTO, AutorRegistrarDTO } from "./autor.model";
export default function ComponenteActualizarAutor() {
  const url = "https://localhost:44367/api-autores/autor";

  return (
    <div>
      <h1>Actualizar Genero</h1>
      <EditarEntidad<AutorRegistrarDTO, AutorDTO>
        url={url}
        urlIndice="/autores"
        nombreEntidad="Autores"
      >
        {(entidad, editar) => (
          <ComponenteFormularioAutores
            modelo={entidad}
            nombreboton="Actualizar"
            cssboton="btn btn-success"
            onSubmit={async (valores) => {
              await editar(valores);
            }}
          />
        )}
      </EditarEntidad>
    </div>
  );
}