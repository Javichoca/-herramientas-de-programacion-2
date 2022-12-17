import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ComponenteEliminarAutor() {
  const { id }: any = useParams();
  const history = useNavigate();
  const url = "https://localhost:44367/api-autores/autor/";

  const EliminarAutor = async () => {
    await axios
      .delete(url + id)
      .then((response) => {
        history("/autores");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //se llama a la peticion
  useEffect(() => {
    EliminarAutor();
  }, []);
  return <div>Eliminar</div>;
}