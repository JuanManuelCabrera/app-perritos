export const GuardarEnStorage = (clave, elemento) => {
    // conseguir los elementos del localstorage
    let elementos= JSON.parse(localStorage.getItem(clave));

    if(Array.isArray(elementos)){
        //añadir un eleento nuevo
        elementos.push(elemento);
    }else{
        // crear un array con el perro nuevo
        elementos = [elemento];

    }
    localStorage.setItem(clave, JSON.stringify(elementos));

    return elemento;
}