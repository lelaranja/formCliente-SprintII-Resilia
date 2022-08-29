import React, { useContext } from 'react'
import { FormContext } from "../../context/formContext";
import Label from '../Label/Label'
import Input from '../Input/Input'
import Button from '../Button/Button'
import S from './FormTwo.module.css'


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
          <Input obrigatorio={true} descricao="Entre com o primeiro endereço" valor={dadosForm.enderecoI}
            handleChange={(e) => handleChange(e, 'enderecoI')} />
        </fieldset>
        <fieldset>
          <Label texto="Endereço 2" />
          <Input obrigatorio={true} descricao="Entre com o segundo endereço" valor={dadosForm.enderecoII}
            handleChange={(e) => handleChange(e, 'enderecoII')} />
        </fieldset>
        <Button texto="Anterior" onClick={backPage} />
        <Button texto="Próximo" onClick={nextPage} />
      </form>
    </div>
  )
}

export default FormOne