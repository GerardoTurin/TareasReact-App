import React, { useState, useEffect } from 'react'
import TareaFormulario from './Formulario.js'
import Tarea from './Tarea.js'
import Swal from 'sweetalert2'
import '../estilos/ListaDeTareas.css'



const ListaDeTareas = () => {


    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const tareasLocalStorage = localStorage.getItem('tareas');
        if (tareasLocalStorage) {
            setTareas(JSON.parse(tareasLocalStorage));
        }
    }, []);


    const agregarTarea = (tarea) => {
        
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
        }

        if (tarea.texto === '') {
            Swal.fire({
                title: 'Error',
                text: 'No puedes agregar una tarea vacía',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }
        
    };

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
        localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    };

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        }
        );
        setTareas(tareasActualizadas);
        localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    };

    return (
        // Fragmento
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                tareas.map((tarea) => 
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                    />
                )
                }
            </div>
        </>
    )
}


export default ListaDeTareas;