import { useState, useEffect } from "react"
import * as PeliculasService from "../servicios/PeliculasService";

export default function ListarPeliculas(){
    const [peliculas, setPeliculas] = useState([]);

    useEffect(()=>{
        PeliculasService.servicioBusquedaPeliculas()
            .then(function(resultadoBusqueda){
                setPeliculas(resultadoBusqueda.data);
            })
            .catch(function(error){
                console.log(error);
            });
    }, [])

    function handleClick(evento){
        const { name, value } = evento.target;
        const idPelicula = value;
        switch(name){
            case 'btnEditar':
            break;

            case 'btnEliminar':
                PeliculasService.servicioEliminarPelicula(idPelicula)
                    .then(function(resultadoEliminar){
                        if(resultadoEliminar.datos.acknowledged){
                            alert(resultadoEliminar.mensaje);
                            /*
                                1. VALOR ÚNICO.
                                2. FUNCIÓN QUE RETORNE UN VALOR ÚNICO
                                    -> RECIBE UN PARÁMETRO -> ESTADO ACTUAL.
                            */
                            setPeliculas( peliculas => (
                                peliculas.filter(pelicula => pelicula._id !== idPelicula)
                            ));
                        }
                        else{
                            alert(resultadoEliminar.mensaje)
                        }
                    })
            break;
        }
    }

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td>Película</td>
                        <td>Año</td>
                        <td>Clasificación</td>
                        <td>Rating</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {peliculas && peliculas.map(pelicula => ( 
                        <tr key={pelicula._id}>
                            <td>{pelicula.titulo}</td>
                            <td>{pelicula.ano}</td>
                            <td>{pelicula.clasificacion}</td>
                            <td>{pelicula.rating}</td>
                            <td>
                                <button type="button" name="btnEditar" value={pelicula._id} onClick={handleClick}>Editar</button>
                                <button type="button" name="btnEliminar" value={pelicula._id} onClick={handleClick}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}