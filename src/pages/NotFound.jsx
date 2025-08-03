import { Layout } from "../components/Layout"

const NotFound=()=>{
return(
    <Layout>
        <h1>Pagina no encontrada</h1>
        <p>Lo sentimos , la pagina que estas buscando no existe.</p>
        <p>Verifica URL o volve al inicio.</p>
        <link to="/">Ir al inicio</link>
    </Layout>
)
}

export {NotFound}