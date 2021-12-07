import { useState } from "react";

export default function FormGeneral(props){
    const [etiqueta, setEtiqueta] = useState('');

    function handleChange(evento){
        const { value } = evento.target;
        setEtiqueta(value);
    }
    
    function handleClick(evento){
        evento.preventDefault();
        // setGeneros()
        const { name, value } = evento.target;
            if( name === "btnAdicionar"){
            props.actualizar( datos => (
                [...datos, etiqueta]
            ));
            setEtiqueta('');
        }
        else{
            props.actualizar(datos => (
                datos.filter((dato, idx) => idx !== parseInt(value))
            ));
        }
    }

    return (
        <>
            <fieldset>
                <legend>{props.titulo}</legend>
                <div>
                    <label htmlFor={props.id}>{props.titulo} : </label>
                    <input type="text" id={props.id} name={props.id} value={etiqueta} onChange={handleChange} ></input>
                    <button type="button" name="btnAdicionar" onClick={handleClick}>Adicionar {props.titulo}</button>
                </div>
                <div>
                    {props.datos && props.datos.map( (dato, idx) => ( 
                        <button type="button" key={idx} name="btnEliminar" value={idx} onClick={handleClick}>{dato}</button>
                    ))}
                </div>
            </fieldset>
        </>
    );
}