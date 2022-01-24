import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FormProvider from "../context/FormProvider";
import Layout from "../components/Layout/Layout";
import FormScreen from "../components/Formulario/FormScreen";
import ResumenScreen from "../components/Resumen/ResumenScreen";

const Rutas = () => {
  return (
    <Router>
      <FormProvider>
          <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<FormScreen />} />
        </Route>
          <Route path="resumen" element={<ResumenScreen />} />
        </Routes>
      </FormProvider>
    </Router>
  );
};

export default Rutas;
