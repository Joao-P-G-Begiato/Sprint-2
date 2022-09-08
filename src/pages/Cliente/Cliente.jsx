import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../context/context"
import "./Cliente.css"

export function Cliente(){
    const {users} = useContext(Context)
    const param = useParams()
    const user = users[param.id]
    return (
        <main className="clienteMain">
            <h1>Cliente: {Number(param.id)+1}</h1>
            <section className="infos">
            <p><b>Nome do cliente:</b> {user.nome} {user.sobrenome}</p>
            <hr></hr>
            <p><b>Endereço:</b> {user.endereco}</p>
            <hr></hr>
            <p><b>Telefone</b>: {user.telefone}</p>
            <hr></hr>
            <p><b>Email:</b> {user.email}</p>
            <hr></hr>
            <p><b>CPF:</b> {user.CPF}</p>
            <hr></hr>
            <p><b>Data de Nascimento:</b> {user.nascimento}</p>
            <hr></hr>
            <p><b>Renda Mensal:</b> R$ {user.renda},00</p>
            <hr></hr>

            </section>
        </main>
        )
}