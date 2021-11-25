import { useState } from "react";
import Resultado from "../componentes/Resultado";
import peliculasDB from "../../peliculas100.json";
import '../estilos/resultados-busqueda.css';

export default function ResultadosBusqueda(){
    // AQUÍ LOS ESTADOS...
    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState([]);
 
    function handleSubmit(evento){
        evento.preventDefault();
    }

    function handleChange(evento){
        let tituloPelicula = evento.target.value;
        let resultadosBusqueda = peliculasDB.slice(0, tituloPelicula.length);
        setResultado(resultadosBusqueda);
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