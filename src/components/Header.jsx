import { useState } from "react"
import { Link } from "react-router-dom"

const Header= ()=>{
    const [user,setUser]= useState(false)
    return(
        <header>
            <img src="" alt=""/>
            <nav>
                <ul>
                    {
                    user && <>
                    <li><Link to="/">Inicio</Link></li>
                      <li><Link to="/dashboard">Dashboard</Link></li>
                     <button>Cerrar sesion</button>
                    </>
                    }
                    {
                      !user && <>
                      <li><Link to="/login">Login</Link></li>
                          <li><Link to="/registrate">Registrate</Link></li>
                      </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export {Header}