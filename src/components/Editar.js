import React from 'react'

export const Editar = ({perro, guardarPerros, setEditar, setListadoState}) => {
    const titulo_decomponente = "editar perrito"

   const guardarEdicion = (e, id) => {
      e.preventDefault();
      let target = e.target;
      let perros_guardados= guardarPerros();
      const indice = perros_guardados.findIndex(perro => perro.id === id);

      let perro_actualizado = {
        id,
        perrito: target.perrito.value,
        descripcion: target.descripcion.value
      };
      perros_guardados[indice] = perro_actualizado;

      localStorage.setItem("perros", JSON.stringify(perros_guardados));
      
      setListadoState(perros_guardados);
      setEditar(0);
    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_decomponente}</h3>
        <form onSubmit={e => guardarEdicion(e, perro.id)}>
            <input type="text"
                   name="perrito"
                   className='titulo_editado'
                   defaultValue={perro.perrito}/>

            <textarea
                    name="descripcion"
                    defaultValue={perro.descripcion}
                    className='descripcion_editada'/>
                    
            <input type="submit" className='editar' value="Actualizar"/>
        </form>
    </div>
  )
}
