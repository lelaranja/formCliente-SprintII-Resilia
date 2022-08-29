import React, { useContext } from 'react'
import { FormContext } from "../../context/formContext";
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import S from './FormTwo.module.css'
import TextArea from '../TextArea/TextArea'


const FormOne = () => {

  const { backPage, nextPage, handleChange, dadosForm } = useContext(FormContext)

  return (
    <div className={S.formMain}>
      <form>
        <fieldset>
          <Label texto="CEP" />
          <Input tipo="text" obrigatorio={true} descricao="Entre com o CEP" pattern="[0-9]{5}-[0-9]{3}" tamanhoMin="8" valor={dadosForm.cep}
            handleChange={(e) => handleChange(e, 'cep')} />
        </fieldset>
        <fieldset>
          <Label texto="Endereço 1" />
          <TextArea obrigatorio={true} descricao="Entre com o primeiro endereço" valor={dadosForm.endereco1}
            handleChange={(e) => handleChange(e, 'endereco1')} />
        </fieldset>
        <fieldset>
          <Label texto="Endereço 2" />
          <TextArea obrigatorio={true} descricao="Entre com o segundo endereço" valor={dadosForm.endereco2}
            handleChange={(e) => handleChange(e, 'endereco2')} />
        </fieldset>
        <Button texto="Anterior" onClick={backPage} />
        <Button texto="Próximo" onClick={nextPage} />
      </form>
    </div>
  )
}

export default FormOne