import React from 'react'

const Input = ({tipo,valor, obrigatorio, onChange}) => {
  return (
    <input value={valor} type={tipo} required={obrigatorio} onChange={onChange}/>
  )
}

export default Input