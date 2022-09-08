import "./home.css"
import { useState } from 'react'
import {Input} from '../../components/Input/Input.jsx'
import {Button} from '../../components/Button/Button.jsx'
import { useNavigate } from "react-router-dom"
import { Context } from "../../context/context"
import { useContext } from "react"

export function Home(){
    const {users, setUsers} = useContext(Context)
    const [forms1, setForms1] = useState("Show")
    const [forms2, setForms2] = useState("hidden")
    const [forms3, setForms3] = useState("hidden")
    const [span, setSpan] = useState("hidden")
    const [finish, setFinish] = useState("hidden")
    const [userFName, setUserFName] = useState("")
    const [userLName, setUserLName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userCEP, setUserCEP] = useState("")
    const [userAdress1, setUserAdress1] = useState("")
    const [userAdress2, setUserAdress2] = useState("")
    const [userBirthday, setUserBirthday] = useState("")
    const [userCPF, setUserCPF] = useState("")
    const [userIncome, setUserIncome] = useState("")
    const navigate = useNavigate()
    
    return (
        <main>
            <h1>Página de Cadastro</h1>
                <form className={forms1}>
                    <Input name="nome" label="Nome" onChange={(e)=>{setUserFName(e.target.value)}}/>
                    <Input name="sobrenome" label="Sobrenome" onChange={(e)=>{setUserLName(e.target.value)}} />
                    <Input name="email" label="E-mail" onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    <Input name="telefone" label="Telefone" onChange={(e)=>{setUserPhone(e.target.value)}}/>
                    <Button label="Proximo" callback={(e)=>{
                        e.preventDefault()
                        if(userFName != "" && userLName != "" && userEmail != "" && userPhone != ""){
                            setForms1("hidden")
                            setForms2("show")
                            setSpan("hidden")
                        }else{
                            setSpan("show")
                        }
                    }}/>
                    <span className={span}> Alguma informação não está preenchida</span>
                </form>
                <form className={forms2}>
                    <Input name="CEP" label="CEP" onChange={(e)=>{setUserCEP(e.target.value)}}/>
                    <Input name="endereço1" label="Endereço 1" onChange={(e)=>{setUserAdress1(e.target.value)}} />
                    <Input name="Endereço2" label="Endereço 2" onChange={(e)=>{setUserAdress2(e.target.value)}}/>
                    <div className="buttonsDiv">
                        <Button label="Anterior" callback={(e)=>{
                            e.preventDefault()
                            setForms1("show")
                            setForms2("hidden")
                        }}/>
                        <Button label="Proximo" callback={(e)=>{
                            e.preventDefault()
                            if(userCEP != "" && userAdress1 != "" && userAdress2 != ""){
                                setForms2("hidden")
                                setForms3("show")
                                setSpan("hidden")
                            }else{
                                setSpan("show")
                            }
                            }}/>
                    </div>
                    <span className={span}> Alguma informação não está preenchida</span>
                </form>
                <form className={forms3}>
                    <Input name="dataNascimento" label="Data de Nascimento" onChange={(e)=>{setUserBirthday(e.target.value)}}/>
                    <Input name="CPF" label="CPF" onChange={(e)=>{setUserCPF(e.target.value)}} />
                    <Input name="renda-mensal" label="Renda Mensal" onChange={(e)=>{setUserIncome(e.target.value)}}/>
                    <div className="buttonsDiv">
                        <Button label="Anterior" callback={(e)=>{
                            e.preventDefault()
                            setForms2("show")
                            setForms3("hidden")
                        }}/>
                        <Button label="Finalizar Cadastro" callback={(e)=>{
                            e.preventDefault()
                            if(userCPF != "" && userIncome != "" && userBirthday != ""){
                                console.log(users)
                                if(users == []){
                                    setUsers([
                                        {
                                            nome: userFName,
                                            sobrenome: userLName,
                                            email: userEmail,
                                            telefone: userPhone,
                                            endereco: userAdress1 + "-" + userAdress2 + "-" + userCEP,
                                            CPF: userCPF,
                                            nascimento: userBirthday,
                                            renda: userIncome
                                        }
                                    ])
                                }
                                setUsers([...users, 
                                {
                                    nome: userFName,
                                    sobrenome: userLName,
                                    email: userEmail,
                                    telefone: userPhone,
                                    endereco: userAdress1 + "-" + userAdress2 + "-" + userCEP,
                                    CPF: userCPF,
                                    nascimento: userBirthday,
                                    renda: userIncome
                                }
                                ])
                                setUserFName("")
                                setUserLName("")
                                setUserEmail("")
                                setUserPhone("")
                                setUserAdress1("")
                                setUserAdress2("")
                                setUserCEP("")
                                setUserCPF("")
                                setUserBirthday("")
                                setUserIncome("")
                                setForms3("hidden")
                                setFinish("show")
                                setSpan("hidden")
                            }else{
                                setSpan("show")
                            }
                            }}/>
                    </div>
                    <span className={span}> Alguma informação não está preenchida</span>
                </form>
                <div className={finish}>
                    Parabéns Usuário Cadastrado com sucesso.
                    <div className="buttonsfsh">
                        <Button className="btnFinish" label="Cadastrar Novo Usuário" callback={(e)=>{
                                e.preventDefault()
                                setForms1("show")
                                setFinish("hidden")
                            }}/>
                            <Button className="btnFinish" label="Visualizar Usuários" callback={(e)=>{
                                e.preventDefault()
                                navigate("/clientes")
                                }}/>
                    </div>
                </div>
        </main>
    )
}