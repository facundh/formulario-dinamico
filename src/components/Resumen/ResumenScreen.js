import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Ui/Input';

const ResumenScreen = () => {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1)
    }
  return (
        <div className='container mt-4'>
            <h1>Listado de Formularios</h1>
           
           <button 
           className='btn btn-outline-primary mt-3'
           onClick={handleReturn}
           >
               Volver Atras...
           </button>
        </div>
  );
};

export default ResumenScreen;
