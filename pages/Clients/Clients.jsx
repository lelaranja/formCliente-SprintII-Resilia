import React, { useContext } from 'react'
import { FormContext } from "../../src/context/formContext";
import CardCliente from '../../src/components/CardCliente/CardCliente'
import S from './Clients.module.css'


const Clients = () => {
  const { lista } = useContext(FormContext);
  return (
    <div className={S.container}>
      <h1>Clientes</h1>
      {lista.length > 0 ?
        lista.map((lista, index) => (
          <CardCliente
            key={index}
            nome={lista.nome}
            sobrenome={lista.sobrenome}
            email={lista.email}
            telefone={lista.telefone}
            cep={lista.cep}
            enderecoI={lista.enderecoI}
            enderecoII={lista.enderecoII}
            dataNascimento={lista.dataNascimento}
            cpf={lista.cpf}
            rendaMensal={lista.rendaMensal}
          />
        ))
        : <p>Nenhum cliente cadastrado</p>}
    </div>
  )
}

export default Clients