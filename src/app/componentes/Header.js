import { useHistory } from 'react-router';
import '../estilos/header.css';

export default function Header(props){
    let history = useHistory();

    function handleClick(evento){
        const { name } = evento.target;
        if(name === "btnIniciar"){
            history.push("/login");
        }
        else{
            localStorage.removeItem('auth');
            props.autenticado(null);
            history.push("/");
        }
    }

    return(
        <>
            <header className="header">
                {props.usuario ?
                    (
                        <button type="button" name="btnCerrar" onClick={handleClick}>Cerrar Sesión</button>
                    )
                    :
                    (
                        <button type="button" name="btnIniciar" onClick={handleClick}>Iniciar Sesión</button>
                    )
                }
            </header>
            {props.children}
        </>
    )
}