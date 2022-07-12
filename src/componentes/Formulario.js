import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../estilos/Formulario.css';




const TareaFormulario = (props) => {
    

    const [input, setInput] = useState('');

    const manejarCambio = (evt) => {
        setInput(evt.target.value);
    }

    const manejarEnvio = (evt) => {
        evt.preventDefault(); // Evita que se recargue la pagina al enviar el formulario.
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
        evt.target.reset();
        setInput('');
    }

    

    return (
        <form className='tarea-formulario'
                onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escriba una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )

    }

    export default TareaFormulario;