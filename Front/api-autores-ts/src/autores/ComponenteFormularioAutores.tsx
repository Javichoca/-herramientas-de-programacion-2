import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { AutorRegistrarDTO } from "./autor.model";

export default function ComponenteFormularioAutores(
  props: FormularioAutorProps
) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .max(100, "La longitud máxima del nombre es 100 caracteres"),
      })}
    >
      <Form>
        <div className="row">
          <div className="col-6">
            <label className="form-label" htmlFor="nombre">
              Nombre:
            </label>

            <Field name="nombre" className="form-control" />

            <ErrorMessage name="nombre">
              {(mensaje) => <div className=" text-danger">{mensaje}</div>}
            </ErrorMessage>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="form-label">Estado:</label>
            <div className="col-6 form-check">
              <Field
                className="form-check-input"
                name="estado"
                type="checkbox"
              />
              <label className="form-check-label">Habilitado</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button type="submit" className={props.cssboton}>
              {props.nombreboton}
            </button>
            <Link className="btn btn-secondary" to="/autores">
              Cancelar
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

interface FormularioAutorProps {
  modelo: AutorRegistrarDTO;
  nombreboton: string;
  cssboton: string;
  onSubmit(
    valores: AutorRegistrarDTO,
    accion: FormikHelpers<AutorRegistrarDTO>
  ): void;
}