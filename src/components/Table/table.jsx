import { useNavigate } from "react-router-dom"
import "./table.css"

export function Table(props){
    const navigate = useNavigate()
    return(
        <table>
            <tr>
                <th>ID do cliente</th>
                <th>Nome do Cliente</th>
                <th>E-mail do Cliente</th>
            </tr>
            {props.data.map((item,index)=>{
                return(
                    <tr className={index % 2 ===0 ? "even": "odd"} onClick={()=>{
                        navigate(`/cliente/${index}`)
                    }}>
                        <td>{index+1}</td>
                        <td>{item.nome} {item.sobrenome}</td>
                        <td>{item.email}</td>
                    </tr>
                )
            })}
        </table>
    )
}