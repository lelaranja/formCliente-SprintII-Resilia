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
        <Input tipo="text" obrigatorio={true} descricao="Entre com o CEP" pattern="[0-9]{5}-[0-9]{3}" tamanhoMin="8" />
        <Label texto="Endereço 1" />
        <TextArea obrigatorio={true} descricao="Entre com o primeiro endereço" />
        <Label texto="Endereço 2" />
        <TextArea obrigatorio={true} descricao="Entre com o segundo endereço" />
        <Button texto="Anterior" />
        <Button texto="Próximo" />
      </form>
    </div>
  )
}

export default FormOne