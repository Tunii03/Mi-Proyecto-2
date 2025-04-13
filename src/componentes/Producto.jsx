import { useState } from "react";
import EditarFormulario from "./EditarFormulario";   

function Producto({producto, onEliminar, onEditar,  onToggleComprado}){
    const [editando, setEditando] = useState(false);
    
    return(
        <div>
          {editando ? ( 
            <EditarFormulario
                producto={producto}
                onGuardar={(productoEditado) => {
                    onEditar(productoEditado);
                    setEditando(false);
                }}
                onCancelar={() => setEditando(false)}
                />
            ) : (
            <div>
                <span>
                    <strong>{producto.nombre}</strong> - ${producto.precio} - {producto.cantidad}
                </span>
                
                <button onClick={() =>setEditando(true)}>Editar</button>
                <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
                <button onClick={onToggleComprado}>
                    {producto.comprado ? "Desmarcar" : "Marcar como comprado"}
                </button>
            </div>
            )}
        </div>
    );
}
export default Producto;


