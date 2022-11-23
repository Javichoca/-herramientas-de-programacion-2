import { useParams } from "react-router-dom";

export default function ComponenteActualizarLibro() {
  const { id }: any = useParams();
  return (
    <div>
      <h1>Actualizacion de Libros</h1>
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
            <label className="form-label">Autor:</label>
            <select className="form-select" id="cboAutor">
              <option selected>Seleccione un autor</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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