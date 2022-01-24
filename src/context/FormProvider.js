import React, { createContext, useContext, useState } from 'react';

const FormContex = createContext();
export const FormConsumer = () => useContext(FormContex);
const FormProvider = ({children}) => {

  const [form, setForm] = useState();

  return (
    <FormContex.Provider>
        {children}
    </FormContex.Provider>
  );
};

export default FormProvider;
