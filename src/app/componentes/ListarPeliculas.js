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
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}