import { Layout } from "../components/Layout"


const Login=()=>{
    return(
        <Layout>
            <h1>Inicia sesion</h1>
         <section>
            <h2>Hola,bienvenido de nuevo</h2>
            <form>
                  <div>
                    <label>Correo electronico:</label>
                    <input type="email"/>
                </div>
                   <div>
                    <label>Contraseña:</label>
                    <input type="password" />
                    <button>Ingresar </button>
                </div>
            </form>
         </section>

        </Layout>
    )

}

export {Login}