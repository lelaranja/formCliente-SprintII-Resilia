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
    const [page, setPage] = useState(0)

    function handleChange(e, nomeDaChave) {
        setDadosForm({
            ...dadosForm,
            [nomeDaChave]: e.target.value,
        });
    }

    function nextPage(e) {
        e.preventDefault()
        setPage(page + 1)
    }

    function backPage(e) {
        e.preventDefault()
        setPage(page - 1)
    }

    function handleClick(e) {
        e.preventDefault()
        setLista([...lista, dadosForm])
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
        })
        setPage(0)
    }

    const contexto = {
        dadosForm: dadosForm,
        lista: lista,
        page: page,
        nextPage: nextPage,
        backPage: backPage,
        handleChange: handleChange,
        handleClick: handleClick,
    };

    return (
        <FormContext.Provider value={contexto}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
