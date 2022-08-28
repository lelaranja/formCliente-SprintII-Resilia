import React, { useState } from "react";
import S from "./Cadastro.module.css";
import FormOne from "../../src/components/FormOne/FormOne";
import FormTwo from "../../src/components/FormTwo/FormTwo";
import FormThree from "../../src/components/FormThree/FormThree";

const Registration = () => {

  return (
    <div className={S.container}>
      {view == 'form1' && <FormOne />}
      {view == 'form2' && <FormTwo />}
      {view == 'form3' && <FormThree />}
    </div>
  );
};

export default Registration;
