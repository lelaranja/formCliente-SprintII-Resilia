import React, { useState } from "react";
import S from "./Cadastro.module.css";
import FormOne from "../../src/components/FormOne/FormOne";
import FormTwo from "../../src/components/FormTwo/FormTwo";
import FormThree from "../../src/components/FormThree/FormThree";

const Registration = () => {
  const [view, setView] = useState("form1");
  function handleViewFst() {
    e.preventDefault();
    setView(view);
  }
  function handleViewScd() {
    e.preventDefault();
    setView("form2");
  }
  function handleViewTrd() {
    e.preventDefault();
    setView("form3");
  }

  return (
    <div className={S.container}>
      <h1>Formulário de cadastro</h1>
      {/* {view == "form1" && <FormOne onClick={handleViewScd} />}
      {view == "form2" && <FormTwo onClick={handleViewTrd} />}
      {view == "form3" && <FormThree />} */}
      <FormThree />
    </div>
  );
};

export default Registration;
