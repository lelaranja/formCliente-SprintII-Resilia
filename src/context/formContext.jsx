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


    const contexto = {
        dadosForm: dadosForm,
        lista: lista,
        handleChange: handleChange,
        handleClick: handleClick,
        // handleViewFst: handleViewFst,
        // handleViewScd: handleViewScd,
        // handleViewTrd: handleViewTrd,
    };

    return (
        <FormContext.Provider value={contexto}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
