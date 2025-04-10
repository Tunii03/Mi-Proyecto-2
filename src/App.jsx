import { useState } from 'react'
import './App.css'
import Producto from './componentes/Producto'
import Cabeza from './componentes/Cabeza'
import Formulario from './componentes/Formulario'
import ListaDeProductos from './componentes/ListaDeProductos'

function App() {

  const[productos,setProductos] = useState([]);

  const agregarProducto = (nombre) => {
    if (nombre.trim() === '') return;
    const nuevoProducto ={
      nombre,
      cantidad: 1,
      precio: 0,
    };
    setProducto([...productos, nuevoProducto]);
  };
  
  const eliminarProducto = (index) =>{
    setProductos(productos.filter((_, i) => i !== index));
  };

  const editarProducto = (index, productoEditado) => {
    const nuevos = [...productos];
    nuevos[index] = productoEditado;
    setProductos(nuevos);
  };

  return(
    
    <div className="App">
      <header>
      <Cabeza  title='Lista de Compras' />
      </header>
      
      <Formulario agregar={agregarProducto}/>
      <ListaDeProductos 
        productos={productos}
        eliminar={eliminarProducto}
        editar={editarProducto}
      
      />
    </div>
  );
}

export default App;
