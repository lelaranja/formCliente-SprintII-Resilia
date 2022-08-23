import React from 'react'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import S from './FormTwo.module.css'
import TextArea from '../TextArea/TextArea'

const FormOne = () => {
  return (
    <div className={S.formMain}>
        <form>
        <Label texto="CEP" />
        <Input tipo="number" obrigatorio={true} descricao="Entre com o CEP" pattern="[0-9]{5}-[0-9]{3}"/>
        <Label texto="Endereço 1" />
        <TextArea obrigatorio={true} descricao="Entre com o primeiro endereço"/>
        <Label texto="Endereço 2" />
        <TextArea descricao="Entre com o segundo endereço"/>
        <Button type='Submit' texto="Próximo"/>
        </form>
    </div>
  )
}

export default FormOne