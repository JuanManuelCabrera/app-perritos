import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusquedaState] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPerro = (e) => {

    setBusquedaState(e.target.value);

    
    // CRear estado y ACTUALIZARLO

    // FILTRAR LAS COINCIDENCIAS 
    let perros_encontrados = listadoState.filter(perro => {
      return perro.perrito.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    // COMPROBAR SI HAY UN RESULTADO
    if(busqueda.length <= 1 || perros_encontrados <= 0 ){
      perros_encontrados = JSON.parse(localStorage.getItem("perros"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }
     // DAR VALOR DE TODO EN EL LOCALSTORAGE

    // ACTUALIZAR EL ESTADO DEL LISTADO PRINCIPAL CON LO QUE FILTRE
    setListadoState(perros_encontrados);
  }


  return (
    <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            {noEncontrado == true && (<span className='no-encontrado'>No se encontraron coincidencias</span>)}
            
            <form>
                <input type="text"
                       id ="search_field" 
                       name="busqueda"
                       autoComplete='off'
                       value={busqueda}
                       onChange={buscarPerro} />
                <button id="search">Buscar</button>
            </form>
         </div>
  )
}
