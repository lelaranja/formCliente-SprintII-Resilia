import React, { useContext } from 'react'
import { FormContext } from "../../context/formContext";
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import S from './FormOne.module.css'

const FormOne = () => {

  const { nextPage, handleChange, dadosForm } = useContext(FormContext)

  return (
    <div className={S.formMain}>
      <form>
        <fieldset>
          <Label texto="Nome" />
          <Input tipo="text" obrigatorio={true} descricao="Nome do cliente" valor={dadosForm.nome}
            handleChange={(e) => handleChange(e, 'nome')} />
        </fieldset>
        <fieldset>
          <Label texto="Sobrenome" />
          <Input tipo="text" obrigatorio={true} descricao="Sobrenome do cliente" valor={dadosForm.sobrenome}
            handleChange={(e) => handleChange(e, 'sobrenome')} />
        </fieldset>
        <fieldset>
          <Label texto="E-mail" />
          <Input tipo="email" obrigatorio={true} descricao="E-mail do cliente" valor={dadosForm.email}
            handleChange={(e) => handleChange(e, 'email')} />
        </fieldset>
        <fieldset>
          <Label texto="Telefone" />
          <Input tipo="tel" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" obrigatorio={true} descricao="(xx) xxxx-xxxx" valor={dadosForm.telefone}
            handleChange={(e) => handleChange(e, 'telefone')} />
        </fieldset>
        <Button text="Próximo" onClick={nextPage} />
      </form>
    </div>
  )
}

export default FormOne