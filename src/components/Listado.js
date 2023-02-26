import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

 // const [listadoState, setListadoState] = useState([]);

 const [editar, setEditar] = useState(0);

  useEffect(() => {
    guardarPerros();
  }, []);

  const guardarPerros = () => {
    let perritos = JSON.parse(localStorage.getItem("perros"));
    setListadoState(perritos);
    return perritos;
  } 

  const borrarPerro = (id) => {
    let perros_guardados = guardarPerros();

    let nuevo_array_perros = perros_guardados.filter(perro=> perro.id !== parseInt(id));

    setListadoState(nuevo_array_perros);

    localStorage.setItem("perros", JSON.stringify(nuevo_array_perros));
  }
  
  return (
    <>  
    { listadoState != null ? 
    
      listadoState.map(perro => {
      return (

      <article key = {perro.id} className="perrito-item">
      <h3 className="title">{perro.perrito}</h3>
      <p className="descripcion">{perro.descripcion}</p>
      <button className="edit" onClick={()=> setEditar(perro.id)}>Editar</button>
      <button className="delete" onClick={()=> borrarPerro(perro.id)}>Borrar</button>

      {editar === perro.id && 
      (
      
      <Editar perro={perro}
        guardarPerros={guardarPerros}
        setEditar={setEditar}
        setListadoState={setListadoState} />)}

      </article>


     
     );
    }
    ) : <h2>no hay perritos cargados</h2>
     } 
     </>
  )
  
}
