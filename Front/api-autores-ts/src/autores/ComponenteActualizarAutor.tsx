import { useParams } from "react-router-dom";

export default function ComponenteActualizarAutor() {
  // creamos una variable para capturar el codigo que se va actualizar
  const { id }: any = useParams();
  return (
    <div>
      <h1>Actualizacion de Autores</h1>
      <h2>El id es: {4}</h2>
      <form className="form-control">
        <div className="row">
          <div className="col-6">
            <label className="form-label">Nombre:</label>
            <input type="text" className="form-control" id="txtNom" required />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="form-label">Estado:</label>
            <div className="col-6 form-check">
              <input type="checkbox" className="form-check-input" id="chkEst" />
              <label className="form-check-label">Habilitado</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button type="submit" className="btn btn-success">
              Actualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
