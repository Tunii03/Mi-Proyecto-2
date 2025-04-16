import { useState } from "react";
import EditarFormulario from "./EditarFormulario";   

function Producto({producto, onEliminar, onEditar,  onToggleComprado}){
    const [editando, setEditando] = useState(false);
    
    return(
        <div className="producto">
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
                <span
                    className={
                        producto.comprado ? "tachado" : ""
                    }>
                    <strong>{producto.nombre}</strong> - ${producto.precio} - {producto.cantidad}
                </span>
            <div className="botones">
                <button onClick={() =>setEditando(true)} className="btn editar">Editar</button>
                <button onClick={() => onEliminar(producto.id)} className="btn eliminar">Eliminar</button>
                <button onClick={onToggleComprado} className="btn comprar">
                    {producto.comprado ? "Desmarcar" : "Marcar como comprado"}
                </button>
            </div>
            </div>
            )}
        </div>
    );
}
export default Producto;


