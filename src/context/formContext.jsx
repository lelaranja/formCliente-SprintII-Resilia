import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [dadosForm, setDadosForm] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        cep: "",
        enderecoI: "",
        enderecoII: "",
        dataNascimento: "",
        cpf: "",
        rendaMensal: "",
    });

    const [lista, setLista] = useState([]);

    //6 - Criar a função que altera o estado
    function handleChange(e, nomeDaChave) {
        setDadosForm({
            ...dadosForm,
            [nomeDaChave]: e.target.value,
        });
    }

    function handleClick(e) {
        e.preventDefault();

        console.log(dadosForm);

        setLista([...lista, dadosForm]);

        setDadosForm({
            nome: "",
            sobrenome: "",
            email: "",
            telefone: "",
            cep: "",
            enderecoI: "",
            enderecoII: "",
            dataNascimento: "",
            cpf: "",
            rendaMensal: "",
        });
    }

    const [view, setView] = useState("form1");
    function handleViewFst() {
        setView("form1");
    }
    function handleViewScd() {
        setView("form2");
    }
    function handleViewTrd() {
        setView("form3");
    }

    const contexto = {
        dadosForm: dadosForm,
        lista: lista,
        handleChange: handleChange,
        handleClick: handleClick,
        handleViewFst: handleViewFst,
        handleViewScd: handleViewScd,
        handleViewTrd: handleViewTrd,
    };

    return (
        <FormContext.Provider value={contexto}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
