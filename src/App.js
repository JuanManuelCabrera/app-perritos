import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

    const [listadoState, setListadoState]= useState([]);

  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="loguito"></div>
            </div>
        <h1>Perritos</h1>
        </header>

        {/*barra de navegacion*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Perritos</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>

            </ul>
        </nav>

        {/*Contenido principal*/}
        <section className="content">
            {/*aca van los perritos*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState} />
        </section>

        {/*barra lateral*/}

        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            <Crear setListadoState={setListadoState}/>

        </aside>

        <footer className="footer">

        $copy; Master en javascript
        </footer>


    </div>
    
    
  );
}

export default App;
