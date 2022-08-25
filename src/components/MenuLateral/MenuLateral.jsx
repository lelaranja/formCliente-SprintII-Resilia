import React from "react";
import { Link } from "react-router-dom";
import S from "./MenuLateral.module.css";

const MenuLateral = () => {
  return (
    <aside className={S.container}>
      <nav>
        <Link className={S.link} to={"/"}>
          Home
        </Link>
        <Link className={S.link} to={"/cadastro"}>
          Cadastro
        </Link>
        <Link className={S.link} to={"/clientes"}>
          Clientes
        </Link>
      </nav>
    </aside>
  );
};

export default MenuLateral;
