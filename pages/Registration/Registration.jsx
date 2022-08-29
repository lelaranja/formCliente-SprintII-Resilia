import React, { useContext } from "react";
import { FormContext } from "../../src/context/formContext";
import S from "./Cadastro.module.css";
import FormOne from "../../src/components/FormOne/FormOne";
import FormTwo from "../../src/components/FormTwo/FormTwo";
import FormThree from "../../src/components/FormThree/FormThree";

const Registration = () => {

  const { page } = useContext(FormContext)

  return (
    <div className={S.container}>
      <h1>Formulário de cadastro</h1>
      {page === 0 && <FormOne />}
      {page === 1 && <FormTwo />}
      {page === 2 && <FormThree />}
    </div>
  );
};

export default Registration;
