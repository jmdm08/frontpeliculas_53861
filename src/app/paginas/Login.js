import { useState } from "react";
import { useHistory } from "react-router";
import * as UsuariosService from "../servicios/UsuariosService";

export default function Login(props){
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    let history = useHistory();

    function handleChange(evento){
        let {name, value} = evento.target;
        if(name === "usuario"){
            setUsuario(value);
        }
        else{
            setClave(value);
        }
    }

    function handleClick(evento){
        evento.preventDefault();
        UsuariosService.servicioIniciarSesion(usuario, clave)
            .then(function(resultadoUsuario){
                if(resultadoUsuario.token){
                    const datosSesion = {
                        "nombre" : resultadoUsuario.datos.nombre,
                        "roles" : resultadoUsuario.datos.roles,
                        "token" : resultadoUsuario.token
                    }

                    localStorage.setItem('auth', JSON.stringify(datosSesion) );

                    props.autenticado(datosSesion);

                    history.push("/administrar");
                }
            })
    }

    return(
        <>
            <form>
                <fieldset>
                    <legend>Iniciar Sesión</legend>
                    <div>
                        <label htmlFor="usuario">Usuario: </label>
                        <input type="text" id="usuario" name="usuario" value={usuario} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="clave">Contraseña: </label>
                        <input type="password" id="clave" name="clave" value={clave} onChange={handleChange} />
                    </div>
                    <div>
                        <button type="button" onClick={handleClick}>Iniciar Sesión</button> 
                    </div>
                </fieldset>
            </form>
        </>
    );
}