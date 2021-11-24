import '../estilos/resultado.css';

export default function Resultado(props){

    function handleClick(evento){
        // TODO: Redireccionar al detalle de la película.
        evento.stopPropagation();
        alert("Click en contenedor películas");
    }

    function handleClickPoster(evento){
        evento.stopPropagation();
        alert("Click en el póster");
    }

    return (
        <>
            <div className="dv-pelicula" onClick={handleClick}>
                <div className="dv-poster">
                    <img onClick={handleClickPoster} alt="poster" src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2016/10/10346626_260153840835091_3121210337900902159_n1.jpg?resize=600%2C889&ssl=1" />
                </div>
                <div>
                    <h3>TÍTULO</h3>
                </div>
                <div>
                    <p>SINOPSIS</p>
                </div>
                <div>
                    <span>
                        Rating
                        <i></i>
                    </span>
                </div>
            </div>
        </>
    );
}