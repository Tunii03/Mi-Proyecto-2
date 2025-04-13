import { useState } from 'react'
import './App.css'
import Cabeza from './componentes/Cabeza'
import Formulario from './componentes/Formulario'
import ListaDeProductos from './componentes/ListaDeProductos'


function App() {
  const [productos, setProductos] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);

  const agregarProducto = (producto) => {
    setProductos([...productos,{...producto, comprado: false}]);
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
  };

  const editarProducto = (index, productoEditado) => {
    const nuevosProductos = productos.map((p, i) =>
      i === index ? {...productoEditado, comprado: p.comprado } : p
    );
    setProductos(nuevosProductos);
  };

  const toggleComprado = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].comprado = !nuevosProductos[index].comprado;

    const noComprados = nuevosProductos.filter(p => !p.comprado);
    const comprados = nuevosProductos.filter(p => p.comprado);
    
    setProductos([...noComprados, ...comprados]);
  };

  return (
    <div>
    <Cabeza title='Lista de Compras'/>
    <Formulario onAgregar={agregarProducto}/>
    <button onClick={() => setMostrarLista(!mostrarLista)}>
      {mostrarLista ? "Ocultar Lista" : "Mostrar Lista"}
    </button>
    {mostrarLista && (
      <ListaDeProductos
        productos={productos}
        onEliminar={eliminarProducto}
        onEditar={editarProducto}
        onToggleComprado={toggleComprado}
        />
    )}
    </div> 
  );
}

export default App;

