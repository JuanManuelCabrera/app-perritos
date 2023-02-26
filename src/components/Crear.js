import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const [perroState, setPerroState]= useState({
        perrito: "",
        descripcion: ""
    });

    const {perrito, descripcion} = perroState;

    const tituloComponente = "Ingresar nombre del perrito";
    
    const conseguirDatosform = e => {
        e.preventDefault();

        //conseguir datos del formulario
        let target= e.target;
        let perrito= target.perrito.value;
        let descripcion= target.descripcion.value;

        //crear objeto de pelicula
        let perro ={
            id: new Date().getTime(),
            perrito,
            descripcion
        };

        // guardar estado
        setPerroState(perro);

        setListadoState(elementos=>{
            return [...elementos, perro];
        });


       // guardar en el almacenamiento local
       GuardarEnStorage("perros", perro);

       

       console.log(GuardarEnStorage);
           
    }

    
        // comprobar si es un array

        //guardar en el local storage

        //devolver objeto
        

    
  
  return (
    <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <strong>
            {(perrito && descripcion) && "Has ingresado perrito: " + perrito}
            </strong>
           
        <form onSubmit={conseguirDatosform} >
            <input type="text" 
                   id="perrito"
                   name="perrito" 
                   placeholder="Perrito"/>
            <textarea id="descripcion" 
                      name="descripcion"
                      placeholder="descripcion">
                      
            </textarea>
            <input type="submit" id="save" value="Guardar"/>

        </form>
        </div>
  )
}

