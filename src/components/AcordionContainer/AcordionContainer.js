import React from "react";
import config from "../../listaFormulario.json";
import Acordion from "../Acordion/Acordion";

const AcordionContainer = () => {
 const {formularios} = config;
  return (
        <>
      {
          formularios.map((formulario, index) => (
              
                <Acordion formulario={formulario} key={index} index={index}/>

            ))
        }
        </>
    
  );
};

export default AcordionContainer;
