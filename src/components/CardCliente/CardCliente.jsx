import React from 'react'
import S from './CardCliente.module.css'

const CardCliente = ({ nome, sobrenome, email, telefone, cep, enderecoI, enderecoII, dataNascimento, cpf, rendaMensal }) => {
    return (
        <div className={S.divPrincipal}>
            <section className={S.dadosForm}>
                <small>Nome: </small>
                <p>{nome}</p>
                <small>Sobrenome: </small>
                <p>{sobrenome}</p>
                <small>E-mail: </small>
                <p>{email}</p>
                <small>Telefone: </small>
                <p>{telefone}</p>
                <small>CEP: </small>
                <p>{cep}</p>
                <small>Endereço 1: </small>
                <p>{enderecoI}</p>
                <small>Endereço 2: </small>
                <p>{enderecoII}</p>
                <small>Data de nascimento: </small>
                <p>{dataNascimento}</p>
                <small>CPF: </small>
                <p>{cpf}</p>
                <small>Renda Mensal (R$): </small>
                <p>{rendaMensal}</p>
            </section>
        </div>
    )
}

export default CardCliente