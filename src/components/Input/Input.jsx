import React from 'react'

const Input = ({tipo,valor, obrigatorio, onChange, descricao, tamanhoMin,tamanhoMax}) => {
  return (
    <input value={valor} type={tipo} required={obrigatorio} onChange={onChange} placeholder={descricao} minLength={tamanhoMin} maxLength={tamanhoMax}/>
  )
}

export default Input