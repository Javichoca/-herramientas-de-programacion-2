export default function ComponenteListaLibro(){
    return(
        <div>
            <h1>Lista de Libros</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
  <thead className="table-dark">
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Nombre</th>
      <th scope="col">Autor</th>
      <th scope="col">Estado</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><a href="#" className="btn btn-success">Actualizar</a></td>
      <td><a href="#" className="btn btn-danger">Eliminar</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><a href="#" className="btn btn-success">Actualizar</a></td>
      <td><a href="#" className="btn btn-danger">Eliminar</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry</td>
      <td >Larry</td>
      <td >Bird</td>
      <td><a href="#" className="btn btn-success">Actualizar</a></td>
      <td><a href="#" className="btn btn-danger">Eliminar</a></td>
    </tr>
  </tbody>
</table>

            </div>
            <a href="libros/registrar" className="btn btn-primary">Registrar Libro</a>
        </div>
    );
}
