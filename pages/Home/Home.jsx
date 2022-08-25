import React from 'react'
import S from './Home.module.css'

const Home = () => {
  return (
    <div className={S.container}>
      <h1>Sistema de cadastro de clientes</h1>
      <p>Faça o cadastro de clientes clicando na aba 'Cadastro'</p>
      <p>Acesse a lista de clientes cadastrados clicando na aba 'Clientes'</p>
    </div>
  )
}

export default Home