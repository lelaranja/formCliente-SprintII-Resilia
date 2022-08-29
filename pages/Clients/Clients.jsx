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
        lista.map((item) => (
          <CardCliente
            key={item.cpf}
            nome={item.nome}
            sobrenome={item.sobrenome}
            email={item.email}
            telefone={item.telefone}
            cep={item.cep}
            enderecoI={item.enderecoI}
            enderecoII={item.nderecoII}
            dataNascimento={item.dataNascimento}
            cpf={item.cpf}
            rendaMensal={item.rendaMensal}
          />
        ))
        : <p>Nenhum cliente cadastrado</p>}
    </div>
  )
}

export default Clients