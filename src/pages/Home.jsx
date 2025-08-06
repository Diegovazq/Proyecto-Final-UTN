
    import { useEffect, useState } from "react"
    import { Layout } from "../components/Layout"

    const Home= () =>{
    const [products,setProducts]= useState([])
    const [user,setUser]= useState(true)

    const fetchingProducts= async()=>{
    const response= await fetch("https://fakestoreapi.com/products",{method:"GET"})
    const data= await response.json()
    
    setProducts(data)
}

    useEffect(()=>{fetchingProducts()},[])

    const handleDelete=async (id) => {
       const response= await fetch (`https://fakestoreapi.com/products${id}`,{method:"DELETE"})
    
    if (response.ok){
        setProducts(prevProduct => prevProduct.filter((product)=>product.id != id))
    }

     const handleUpdate= async ()=>{
        const response =await fetch(`https://fakestoreapi.com/products${id}`,{method:"PUT"})
     }
     


}
    return (
        <Layout>
     <section>
    <h1>Bienvenido a Nuestra Tienda Virtual</h1>
    <p>Descubrí lo mejor en tecnología, moda, hogar y mucho más.</p>
    </section>
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
    <p>Elegi entre nuestras categorias mas populares.</p>
    <div>
        {
            products.map((product)=>
            <div key={product.id}>
                <h2 key={product.id}>{product.title}</h2>
                <img width="80px" src={product.image} alt={`Imagen de ${product.title}`}/>
                <p>${product.price} </p>
                <p>{product.description}</p>
                <p><strong>{product.category}</strong></p>
                {
                  user && <div>
                    <button>Actualizar</button>
                    <button onClick={()=> handleDelete(product.id) }>Borrar</button>
                </div>
                }
            </div>)
        }
    </div>
  </section>
        </Layout>
    )
}

export {Home}