import ListarPeliculas from "../componentes/ListarPeliculas";

export default function AdministrarPeliculas(){
    return(
        <>
            <fieldset>
                <legend>Administrar Películas</legend>
                <div>
                    <ListarPeliculas />
                </div>
            </fieldset>
        </>
    );
}