import { useState } from "react";

function EditarFormulario({producto, onGuardar, onCancelar}){

    const[nombre, setNombre] = useState(producto.nombre);
    const[precio, setPrecio] = useState(producto.precio);
    const[cantidad, setCantidad] = useState(producto.cantidad);

    const manejarGuardar = (e) => {
        e.preventDefault();
        onGuardar({nombre, precio, cantidad});
    };
    
    return(
        <form onSubmit={manejarGuardar}>
            <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
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
            <button type="submit">Guardar</button>
            <button type="button" onClick={onCancelar}>Cancelar</button>

        </form>
    );
}
export default EditarFormulario;