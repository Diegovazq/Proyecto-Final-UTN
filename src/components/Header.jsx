import { Link } from "react-router-dom"

const Header= ()=>{
    return(
        <header>
            <img src="" alt=""/>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                      <li><link to="/dashboard">Dashboard</link></li>
                        <li><link to="/login">Login</link></li>
                          <li><link to="/registrate">Registrate</link></li>
                          <button>Cerrar sesion</button>
                </ul>
            </nav>
        </header>
    )
}

export {Header}