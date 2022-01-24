import React, { useState } from 'react';
import AcordionContainer from '../AcordionContainer/AcordionContainer';
import CreateFormulario from '../CreateFormulario/CreateFormulario';

const FormScreen = () => {
  const [show, setShow] = useState(false);

  const handleToggleShow = () => {
     setShow(!show);
  }
  return( 
  <div className='container mt-4'>

{
  
    <button className='btn btn-outline-primary' onClick={handleToggleShow}>
       {!show ? 'Crear Formulario' :' Cerrar Formulario' } 
    </button>
    
}
{

    show && <CreateFormulario />
}
  </div>
  )
};

export default FormScreen;
