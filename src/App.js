import './App.css';
import React from 'react';
import CheckListLogo from './imagenes/CheckList_logo.png';
import ListaDeTareas from './componentes/ListaDeTareas.js';

function App() {
  return (
    <div className="App-Tareas">
      <div className='tarea-logo-contenedor'>
        <img className='tarea-logo' src={CheckListLogo} alt='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
          
      </div>
    </div>
  );
}

export default App;
