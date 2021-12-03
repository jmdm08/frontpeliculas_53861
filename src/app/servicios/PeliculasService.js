import { URL_API_PELICULAS, getToken } from "../config/config";

export function servicioBusquedaTitulo(titulo){
    
    const path = "/peliculas/buscarPeliculasTitulo/" + titulo;

    /*
        FETCH -> CARGAR RECURSOS EXTERNOS USANDO HTTP.
            -> URL + PATH
            -> CONFIGURACIÓN
                -> MÉTODO HTTP -> GET, POST, PUT, DELETE.
                -> MODE -> CORS.
                -> HEADERS -> INFORMACIÓN DEL CUERPO O EL TOKEN DE AUTORIZACIÓN
                -> BODY -> CUERPO DE LA PETICIÓN (JSON)
    */

    const config = {
        method : "GET",
        mode : "cors"
    }

    return fetch(URL_API_PELICULAS + path, config)
        .then(function(respuesta){
            if(respuesta.status === 200){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
}

export function servicioBusquedaId(id){

    const path = "/peliculas/obtenerPelicula/" + id;

    const config = {
        method : "GET",
        mode : "cors"
    }

    return fetch(URL_API_PELICULAS + path, config)
        .then(function(respuesta){
            if(respuesta.ok){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        })

}

export function servicioBusquedaPeliculas(){

    const path = "/peliculas/obtenerPeliculas";

    const config = {
        method : "GET",
        mode : "cors",
        headers : {
            "authorization" : "Bearer " + getToken()
        }
    }

    return fetch(URL_API_PELICULAS + path, config)
        .then(function(respuesta){
            if(respuesta.ok){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
}