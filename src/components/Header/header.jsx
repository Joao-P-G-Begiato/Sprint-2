import {Button} from '../Button/Button.jsx'
import {Link} from 'react-router-dom'
import './header.css'

export function Header(){
    return (
        <header>
            <nav>
                <Link to="/"><Button label="cadastro" /></Link>
                <Link to="/clientes"><Button label="clientes"/></Link>
            </nav>
        </header>
    )
}