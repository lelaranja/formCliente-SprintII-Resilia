import React from 'react'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import S from './FormOne.module.css'

const FormOne = () => {
  return (
    <div className={S.formMain}>
        <form>
        <Label texto="Nome" />
        <Input tipo="text" obrigatorio={true} descricao="Nome do cliente"/>
        <Label texto="Sobrenome" />
        <Input tipo="text" obrigatorio={true} descricao="Sobrenome do cliente"/>
        <Label texto="E-mail" />
        <Input tipo="email" obrigatorio={true} descricao="E-mail do cliente"/>
        <Label texto="Telefone" />
        <Input tipo="tel" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" obrigatorio={true} descricao="(xx) xxxx-xxxx"/>
        <Button type='Submit' texto="Próximo"/>
        </form>
    </div>
  )
}

export default FormOne