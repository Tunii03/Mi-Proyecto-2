import { useState } from "react";
import '../App.css';

function Formulario({onAgregar}){
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();
        if (!nombre ||precio <=0 || cantidad<=0) return;
        onAgregar({nombre, precio: Number(precio), cantidad: Number(cantidad)});
        setNombre('');
        setPrecio(0);
        setCantidad(1);
    };

    return(
        <form onSubmit={manejarSubmit} className="formulario">
        <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del producto"
             />
        <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
            placeholder="Precio"
        />
        <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            placeholder="Cantidad"
        />
        <button type="submit">Agregar</button>
        </form>
    );
}
export default Formulario;