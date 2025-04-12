import { useState } from 'react'
import './App.css'
import Producto from './componentes/Producto'
import Cabeza from './componentes/Cabeza'
import Formulario from './componentes/Formulario'
import ListaDeProductos from './componentes/ListaDeProductos'


function App() {
  const [productos, setProductos] = useState([]);
  const [inputNombre, setInputNombre] = useState('');
  const [mostrarLista, setMostrarLista] = useState(false);
  const [editandoId, setEditandoId] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaCantidad, setNuevaCantidad] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');

  const agregarProducto = (e) => {
    e.preventDefault();
    if (inputNombre.trim() === '') return;

    setProductos([
      ...productos,
      {
        id: Date.now(),
        nombre: inputNombre,
        cantidad: 1,
        precio: 0,
      },
    ]);
    setInputNombre('');
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  const comenzarEdicion = (producto) => {
    setEditandoId(producto.id);
    setNuevoNombre(producto.nombre);
    setNuevaCantidad(producto.cantidad);
    setNuevoPrecio(producto.precio);
  };

  const guardarEdicion = (id) => {
    setProductos(
      productos.map((p) =>
        p.id === id
          ? {
              ...p,
              nombre: nuevoNombre,
              cantidad: parseInt(nuevaCantidad),
              precio: parseFloat(nuevoPrecio),
            }
          : p
      )
    );
    setEditandoId(null);
    setNuevoNombre('');
    setNuevaCantidad('');
    setNuevoPrecio('');
  };

  return (
    <div className="App">
      <header>
        <div className="Cabeza">
          <h2>Lista de Compras</h2>
        </div>
      </header>

      <section>
        <form onSubmit={agregarProducto}>
          <input
            type="text"
            placeholder="Nombre del producto"
            value={inputNombre}
            onChange={(e) => setInputNombre(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>

        <button onClick={() => setMostrarLista(!mostrarLista)}>
          {mostrarLista ? 'Ocultar Lista' : 'Mostrar Lista'}
        </button>

        {mostrarLista && (
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>
                {editandoId === producto.id ? (
                  <>
                    <input
                      type="text"
                      value={nuevoNombre}
                      onChange={(e) => setNuevoNombre(e.target.value)}
                      placeholder="Nombre"
                    />
                    <input
                      type="number"
                      value={nuevaCantidad}
                      onChange={(e) => setNuevaCantidad(e.target.value)}
                      placeholder="Cantidad"
                    />
                    <input
                      type="number"
                      value={nuevoPrecio}
                      onChange={(e) => setNuevoPrecio(e.target.value)}
                      placeholder="Precio"
                    />
                    <button onClick={() => guardarEdicion(producto.id)}>Guardar</button>
                  </>
                ) : (
                  <>
                    <strong>{producto.nombre}</strong> - Cantidad: {producto.cantidad} - Precio: ${producto.precio}
                    <button onClick={() => comenzarEdicion(producto)}>Editar</button>
                    <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;

