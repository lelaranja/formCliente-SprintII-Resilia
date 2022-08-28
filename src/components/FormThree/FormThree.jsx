import React from 'react'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import S from './FormThree.module.css'

const FormThree = () => {
  return (
    <div className={S.formMain}>
      <form>
        <Label texto="Data de nascimento" />
        <Input tipo="date" obrigatorio={true} descricao="dd/mm/aaaa" />
        <Label texto="CPF" />
        <Input tipo="text" obrigatorio={true} descricao="xxx.xxx.xxx-xx" tamanhoMin="11" tamanhoMax="11" />
        <Label texto="Renda Mensal (R$)" />
        <Input tipo="number" obrigatorio={true} descricao="Valor em reais" />
        <Button type='Button' texto="Anterior" />
        <Button type='Submit' texto="Salvar" />
      </form>
    </div>
  )
}

export default FormThree