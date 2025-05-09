interface TituloProps {
    texto : string
}

const Titulo = (props : TituloProps) => {

    return <h1>{ props.texto }</h1>
}

export default Titulo