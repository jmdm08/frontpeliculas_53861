import { useState, useEffect } from "react";
import Resultado from "../componentes/Resultado";
import * as PeliculasService from '../servicios/PeliculasService';
import '../estilos/resultados-busqueda.css';

export default function ResultadosBusqueda(){
    // AQUÍ LOS ESTADOS...
    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState([]);
 
    /*
        busquedaAnterior === busqueda
            -> No ejecuta el efecta
        busquedaAnterior !== busqueda
            -> Ejecuta.
    */
    useEffect(() => {
        if(busqueda.length >= 3){
            PeliculasService.servicioBusquedaTitulo(busqueda)
                .then(function(resultadosBusqueda){
                    setResultado(resultadosBusqueda.datos);  
                })
                .catch(function(error){
                    console.log(error);
                })
        }
        else{
            setResultado([]);
        }
    }, [busqueda]);

    function handleSubmit(evento){
        evento.preventDefault();
    }

    function handleChange(evento){
        let tituloPelicula = evento.target.value;
        setBusqueda(tituloPelicula);
    }

    return (
        <>
            <div className="dv-busqueda">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Buscar Película</legend>
                        <input type="text" id="busqueda" name="busqueda" onChange={handleChange} placeholder="Buscar por título"  />
                    </fieldset>
                </form>
            </div>
            <div>
                <fieldset>
                    <legend>Listado Películas</legend>
                    <div><span>Mostrando resultados para: {busqueda}</span></div>
                    <div className="dv-resultados">
                        {resultado && resultado.length > 0 && resultado.map(pelicula => (
                            <Resultado pelicula={pelicula} />
                        ))}
                    </div>
                </fieldset>
            </div>
        </>
    );
}