import { useContext } from "react"
import { Context } from "../../context/context"
import { Table } from "../../components/Table/table"

export function Clientes(){
    const {users} = useContext(Context)
    console.log(users)
        if(users != ""){
            return(
                <main>
                    <h1>Página de Clientes</h1>
                    <Table data={users}/>
                </main>
            )
        }else{
            return(
                <main>
                    <h1>Página de Clientes</h1>
                    <p> nenhum cliente encontrado</p>
                </main>
            )
        }
}