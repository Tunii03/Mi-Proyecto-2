import { useState } from "react";
import '../App.css';

function Formulario({agregar}){
    const [input, setInput] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();
        agregar(input);
        setInput('');
    };

    return(
        <form onSubmit={manejarSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nombre del Producto"
                />
                <button type="submit">Agregar a la Lista</button>
        </form>
    );
}
export default Formulario;