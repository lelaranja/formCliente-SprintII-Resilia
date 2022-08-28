import React from 'react'

const Button = ({ texto, onClick, type }) => {
  return (
    <button type={type} onClick={onClick}>{texto}</button>
  )
}

export default Button