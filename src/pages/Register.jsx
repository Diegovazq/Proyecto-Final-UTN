import { Layout } from "../components/Layout"

const Register= ()=>{
return(
    <Layout>       
    <h1>Inicia sesion</h1>
         <section>
            <h2>Hola,bienvenido de nuevo</h2>
            <form>
                  <div>
                    <label>Username:</label>
                    <input type="text"/>
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

export {Register}
