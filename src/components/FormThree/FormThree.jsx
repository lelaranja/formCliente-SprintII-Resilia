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
        <Input tipo="date" obrigatorio={true} descricao="dd/mm/aaaa"/>
        <Label texto="CPF" />
        <Input tipo="number" obrigatorio={true} descricao="xxx.xxx.xxx-xx"  maxlength="11" minlength="11"/>
        <Label texto="Renda Mensal (R$)" />
        <Input tipo="number" obrigatorio={true} descricao="Valor em reais"/>
        <Button type='Submit' texto="Salvar"/>
        </form>
    </div>
  )
}

export default FormThree