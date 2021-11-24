function MiPrimerComponente(props){
    return(
        <>
            <h3>Mi Primer Componente Funcional</h3>
            <span>{props.nombre} {props.apellido}</span>
        </>
    );
}

export default MiPrimerComponente;