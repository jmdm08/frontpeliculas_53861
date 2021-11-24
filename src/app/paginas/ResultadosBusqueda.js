import Resultado from "../componentes/Resultado";
import '../estilos/resultados-busqueda.css';

export default function ResultadosBusqueda(){

    function handleSubmit(evento){
        evento.preventDefault();
    }

    function handleChange(evento){
        console.log(evento);
        console.log(evento.target);
        console.log(evento.target.value);
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
                    <div className="dv-resultados">
                        <Resultado />
                        <Resultado />
                        <Resultado />
                        <Resultado />
                        <Resultado />
                        <Resultado />
                    </div>
                </fieldset>
            </div>
        </>
    );
}