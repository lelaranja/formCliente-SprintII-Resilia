import React from 'react'

const Input = ({tipo,valor, obrigatorio, onChange, descricao}) => {
  return (
    <input value={valor} type={tipo} required={obrigatorio} onChange={onChange} placeholder={descricao}/>
  )
}

export default Input