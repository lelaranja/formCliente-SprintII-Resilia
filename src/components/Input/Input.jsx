import React from 'react'

const Input = ({ tipo, valor, obrigatorio, handleChange, descricao, tamanhoMin, tamanhoMax }) => {
  return (
    <input value={valor} type={tipo} required={obrigatorio} onChange={handleChange} placeholder={descricao} minLength={tamanhoMin} maxLength={tamanhoMax} />
  )
}

export default Input