import React from 'react'

const Button = ({texto, onClick, style}) => {
  return (
    <button onClick={onClick} className={style}>{texto}</button>
  )
}

export default Button