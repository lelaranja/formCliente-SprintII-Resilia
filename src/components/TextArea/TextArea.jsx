import React from 'react'

const TextArea = ({descricao, obrigatorio}) => {
  return (
    <textarea rows="4" cols="33" placeholder={descricao} required={obrigatorio}/>
  )
}

export default TextArea