import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import '../estilos/resultado.css';

export default function Resultado(props){
    let history = useHistory();

    function handleClick(evento){
        // TODO: Redireccionar al detalle de la película.
        evento.stopPropagation();
        history.push("/detalle/" + props.pelicula._id.$oid)        
    }

    return (
        <>
            <div className="dv-pelicula" onClick={handleClick}>
                <div className="dv-poster">
                    <img alt="poster" src={props.pelicula.poster} />
                </div>
                <div>
                    <h3>{props.pelicula.titulo}</h3>
                </div>
                <div>
                    <p>{props.pelicula.sinopsis}</p>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        {props.pelicula.rating}
                    </span>
                </div>
            </div>
        </>
    );
}