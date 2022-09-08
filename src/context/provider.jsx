import { useState } from "react"
import { Context } from "./context"

export const Provider = ({ children }) => {
    const [users, setUsers] = useState([])

    return (
        <Context.Provider value={{ users, setUsers }}>
            {children}
        </Context.Provider>
    )
}