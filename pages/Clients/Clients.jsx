import React from 'react'
import CardCliente from '../../src/components/CardCliente/CardCliente'
import S from './Clients.module.css'


const Clients = () => {
  return (
    <div className={S.container}>
      <h1>Clientes</h1>
      <CardCliente />
    </div>
  )
}

export default Clients