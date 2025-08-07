

import { useState } from "react";
import { Layout } from "../components/Layout";

const Dashboard = () => {
 const [name,setName]= useState("")
 const [price,setPrice]= useState("")
 const [description,setDescription]= useState("")
 const [product,setProduct]=useState(null)
 const [error, setError]= useState(null)


 const handleSubmit =async (e)=>{
   e.preventDefault()
   setError(null)
   if (!name || !price || !description){
    setError("Debes completar todos los campos")
    return
   }
   if (name.lenght<3){
    setError("El nombre debe tener al menos 4 caracteres")
    return
   }
 
   const newProduct={
    id:crypto.randomUUID(),
    title:name,
    price:price,
    description:description,
    category:"",
    image:""
   }
  
   
    const response= await fetch("https://fakestoreapi.com/products",{method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body: JSON.stringify()
    
    })

    const data= await response.jsons()
   
   setProduct(newProduct)

   setName("")
   setPrice("")
   setDescription("")
 }

  return (
    <Layout>
      <h1>Panel de Administración</h1>
      <section>
      <h2>Cargar nuevo producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Nombre del producto:</label>
          <input type="text" name="nombre" onChange={(e)=> setName(e.target.value)} value={name} />
        </div>

        <div>
          <label >Precio:</label>
          <input type="number"  name="precio"  onChange={(e)=> setPrice(e.target.value)} value={price}/>
        </div>

        <div>
          <label >Descripción:</label>
          <textarea name="descripcion"  onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>
        </div>

        <div>
          <button>Cargar producto</button>
        </div>
      </form>
      {
        product && <div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
        
        </div>
      }
    {
        error && <p>{error}</p>
    }
      </section>
    </Layout>
  );
};

export { Dashboard }