import axios, { AxiosResponse } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { ChangeEvent, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { AutorDTO, AutorRegistrarDTO } from "./autor.model";

export default function ComponenteRegistrarAutor() {
  const history = useNavigate();
  const url = "https://localhost:44367/api-autores/autor";
  async function RegistrarAutor(autor: AutorRegistrarDTO) {
    try {
      await axios.post(url, autor);
      history("/autores");
    } catch (error) {
      console.log(error);
    }
  }

  /*
  const [nombre, setNombre] = useState("");

  //creamos una funcipon cuando se envie los datos del formularo
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //mostrar en consola los datos
    console.log(nombre);
  };
  */
  /*const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (txtNom.current) {
      console.log(txtNom.current.value);
    }
  };

  const txtNom = useRef<HTMLInputElement>(null);*/

  return (
    <div>
      <h1>Registro de Autores</h1>
      <Formik
        initialValues={{
          nombre: "",
          estado: "",
        }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 3000));
          var est = false;
          if (valores.estado === "true") {
            est = true;
          } else {
            est = false;
          }

          await RegistrarAutor({
            nombre: valores.nombre,
            estado: est,
          });
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .required("Este campo es requerido")
            .max(100, "La longitud máxima del nombre es 100 caracteres"),
        })}
      >
        <Form>
          {/* <div className="row">
            <div className="col-6">
              <label className="form-label" htmlFor="nombre">
                Nombre:
              </label>

              <Field name="nombre" className="form-control" />

              <ErrorMessage name="nombre">
                {(mensaje) => <div className=" text-danger">{mensaje}</div>}
              </ErrorMessage>
            </div>
          </div> */}

          <ComponenteFormularioCajaTexto campo="nombre" label="Nombre:" />
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
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
              <Link className="btn btn-secondary" to="/autores">
                Cancelar
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

