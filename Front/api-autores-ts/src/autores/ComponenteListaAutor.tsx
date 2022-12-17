import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AutorDTO } from "./autor.model";

export default function ComponenteListaAutor() {
  // const urlautor = "https://localhost:44367/api-autores/autor";
  // const [autores, setAutores] = useState<AutorDTO[]>();
  // useEffect(() => {
  //   axios.get(urlautor).then((respuesta: AxiosResponse<AutorDTO[]>) => {
  //     console.log(respuesta.data);
  //     setAutores(respuesta.data);
  //   });
  // }, []);

  //definimos la direccion del END POINT
  const url = "https://localhost:44367/api-autores/autor";
  //creamos una variable y una funcion
  //variable --> autores
  //funcion --> setAutores
  const [autores, setAutores] = useState<AutorDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setAutores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //se llama a la peticion
  useEffect(() => {
    peticionesGet();
  }, []);

  return (
    <div>
      <h1>Lista de Autores</h1>

      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {autores?.map((autor) => (
              <tr key={autor.codigoautor}>
                <th scope="row">{autor.codigoautor}</th>
                <td>{autor.nombre}</td>
                {autor.estado ? <td>Habilitado</td> : <td>Deshabilitado</td>}
                <td>
                  <Link
                    to={`/autores/actualizar/${autor.codigoautor}`}
                    className="btn btn-success"
                  >
                    Actualizar
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/autores/eliminar/${autor.codigoautor}`}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/autores/registrar" className="btn btn-primary">
        Registrar Autor
      </Link>
    </div>
  );
}
