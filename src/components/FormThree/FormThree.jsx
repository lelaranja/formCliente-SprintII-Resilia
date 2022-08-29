import React, { useContext } from 'react'
import { FormContext } from "../../context/formContext";
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import S from './FormThree.module.css'

const FormThree = () => {

  const { backPage, handleChange, dadosForm, handleClick } = useContext(FormContext)

  return (
    <div className={S.formMain}>
      <form>
        <fieldset>
          <Label texto="Data de nascimento" />
          <Input tipo="date" obrigatorio={true} descricao="dd/mm/aaaa" valor={dadosForm.dataNascimento}
            handleChange={(e) => handleChange(e, 'dataNascimento')} />
        </fieldset>
        <fieldset>
          <Label texto="CPF" />
          <Input tipo="text" obrigatorio={true} descricao="xxx.xxx.xxx-xx" tamanhoMin="11" tamanhoMax="11" valor={dadosForm.cpf}
            handleChange={(e) => handleChange(e, 'cpf')} />
        </fieldset>
        <fieldset>
          <Label texto="Renda Mensal (R$)" />
          <Input tipo="number" obrigatorio={true} descricao="Valor em reais" valor={dadosForm.rendaMensal}
            handleChange={(e) => handleChange(e, 'rendaMensal')} />
        </fieldset>
        <Button texto="Anterior" onClick={backPage} />
        <Button texto="Salvar" onClick={handleClick} />
      </form>
    </div>
  )
}

export default FormThree