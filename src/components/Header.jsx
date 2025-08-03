import { Link } from "react-router-dom"

const Header= ()=>{
    return(
        <header>
            <img src="" alt=""/>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                      <li><link to="/dashboar">Dasboard</link></li>
                        <li><link to="/Login">Login</link></li>
                          <li><link to="/Registrate">Registrate</link></li>
                          <button>Cerrar sesion</button>
                </ul>
            </nav>
        </header>
    )
}

export {Header}