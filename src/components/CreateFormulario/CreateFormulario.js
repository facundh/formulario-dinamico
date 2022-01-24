import React, { useState } from "react";
import CamposForm from "../CamposForm/CamposForm";

const CreateFormulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    campos: [],
  });
  return (
    <div className="container border my-5 py-5 w-100 px-3 rounded-2">
      <form>
        <h4 className="my-5 text-center display-4">Creador de formularios</h4>
        <div className="d-flex justify-content-around mt-4">
          <input
            type="text"
            className="form-control w-50 "
            placeholder="Nombre Formulario"
          />
          <button className="btn btn-success"> Agregar Campos </button>
        </div>
      </form>

      <div className="mt-4 d-flex justify-content-center">
        <CamposForm />
      </div>
      <div className="d-flex justify-content-center mt-5 w-75 mx-auto">
        <button className="btn btn-warning w-100"> Finalizar </button>
      </div>
    </div>
  );
};

export default CreateFormulario;
