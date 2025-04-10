import { useState } from "react";
import EditarFormulario from "./EditarFormulario";   

export default function Producto({producto, eliminar, editar}){

    const[editando, setEditando] = useState(false);

    return(
        <li>
            {editando ? (
                <EditarFormulario
                    producto={producto}
                    onGuardar={(nuevo) => {
                        editar(nuevo);
                        setEditando(false);
                    }}
            
            />
        ) : (
            <>
            <strong>{producto.nombre}</strong> -
            Cantidad: {producto.cantidad} -
            Precio: ${producto.precio}
            <button onClick={() =>setEditando(true)}>Editar</button>
            <button onClick={eliminar}>Eliminar</button>

            </>
        )}
        </li>
    );
}


