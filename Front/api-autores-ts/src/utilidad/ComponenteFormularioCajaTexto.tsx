import { ErrorMessage, Field } from "formik";
import ComponenteErrorCampo from "./ComponenteErrorCajaTexto";

export default function ComponenteFormularioCajaTexto(
  props: FormularioCajaTexto
) {
  return (
    <div className="row">
      <div className="col-6">
        {props.label ? (
          <label className="form-label" htmlFor={props.campo}>
            {props.label}
          </label>
        ) : null}

        <Field name={props.campo} className="form-control" />
        <ErrorMessage name={props.campo}>
          {(mensaje) => <ComponenteErrorCampo mensaje={mensaje} />}
        </ErrorMessage>
      </div>
    </div>
  );
}

interface FormularioCajaTexto {
  campo: string;
  label?: string;
  placeholder?: string;
}