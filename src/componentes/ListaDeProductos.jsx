import Producto from "./Producto";
import EditarFormulario from "./EditarFormulario";
import '../App.css';

function ListaDeProductos({productos, onEliminar, onEditar,onToggleComprado}){

    return(
        <div>
            {productos.map((producto, index)=> (
                <Producto
                key={index}
                producto={producto}
                onEliminar={() => onEliminar(index)}
                onEditar={(nuevoProducto) => onEditar(index, nuevoProducto)}
                onToggleComprado={() => onToggleComprado(index)}
                />
            ))}
                </div>
    );
}
export default ListaDeProductos;