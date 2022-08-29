import React, { useState } from 'react'
import S from './CardCliente.module.css'

const CardCliente = ({ nome, sobrenome, email, telefone, cep, enderecoI, enderecoII, dataNascimento, cpf, rendaMensal }) => {
    const [show, setShow] = useState(false)
    const showHide = (e) => {
        show ? setShow(false) : setShow(true)
    }
    return (
        <div className={S.divPrincipal} onClick={(e) => showHide(e)}>
            {show == true ?
                <div>
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
                </div> : ''}
        </div>
    )
}

export default CardCliente