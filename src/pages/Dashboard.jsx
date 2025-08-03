const Dashboard = () => {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <h2>Cargar nuevo producto</h2>
      <form>
        <div>
          <label >Nombre del producto:</label>
          <input type="text" name="nombre" />
        </div>

        <div>
          <label >Precio:</label>
          <input type="number"  name="precio" />
        </div>

        <div>
          <label >Descripción:</label>
          <textarea name="descripcion"></textarea>
        </div>

        <div>
          <button>Cargar producto</button>
        </div>
      </form>
    </div>
  );
};

export { Dashboard };