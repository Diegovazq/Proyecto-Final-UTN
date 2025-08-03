import { Layout } from "../components/Layout"

const Home= () =>{
    return (
        <Layout>
     
    <h1>Bienvenido a Nuestra Tienda Virtual</h1>
    <p>Descubrí lo mejor en tecnología, moda, hogar y mucho más.</p>
 
  <section>
    <h2>Ofertas Exclusivas</h2>
    <ul>
      <li>Descuento del 50% en productos seleccionados.</li>
      <li>Envíos gratis en compras superiores a $30.000.</li>
      <li>3 y 6 cuotas sin interés con bancos adheridos.</li>
    </ul>
  </section>

  <section>
    <h2>Categorías Destacadas</h2>
    <nav>
      <ul>
        <li><a href="#">Tecnología</a></li>
        <li><a href="#">Moda</a></li>
        <li><a href="#">Hogar y Deco</a></li>
        <li><a href="#">Salud y Belleza</a></li>
        <li><a href="#">Deportes</a></li>
      </ul>
    </nav>
  </section>

  <section>
    <h2>¿Por qué comprar con nosotros?</h2>
    <ul>
      <li>Atención personalizada y soporte 24/7</li>
      <li>Garantía en todos nuestros productos</li>
      <li>Amplia variedad de marcas reconocidas</li>
    </ul>
  </section>

  <section id="productos-recomendados">
    <h2>Productos recomendados para vos</h2>
  
  </section>

        </Layout>
    )
}

export {Home}