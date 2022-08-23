import React from "react";
import { Link } from "react-router-dom";
import S from "./MenuLateral.module.css";

const MenuLateral = () => {
  return (
    <div className={S.container}>
      <aside>
        <nav>
          <Link className={S.link} to={"/"}>Home</Link>
          <Link className={S.link} to={"/cadastro"}>Cadastro</Link>
          <Link className={S.link} to={"/clientes"}>Clientes</Link>
        </nav>
      </aside>
    </div>
  );
};

export default MenuLateral;
