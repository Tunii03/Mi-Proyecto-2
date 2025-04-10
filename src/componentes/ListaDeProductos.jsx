import Producto from "./Producto";
import '../App.css';

function ListaDeProductos({productos, eliminar, editar}){
    return(
        <ul>
            {productos.map((producto, index)=>(
                <Producto
                    key={index}
                    producto={producto}
                    eliminar={() => eliminar(index)}
                    editar={(nuevo) => editar(index, nuevo)}
                />
            ))}
        </ul>
    );
}
export default ListaDeProductos;