import { useState } from "react"

interface TituloProps {
    texto : string
}


const Titulo = (props : TituloProps) => {
    const [ contadorClicks, setContadorClicks ] = useState<number>(0)

    const contadorOnClick = () => {
        setContadorClicks(contadorClicks + 1)
    }

    return <h1 onClick={ contadorOnClick }>
        { props.texto + " " + contadorClicks }
    </h1>
}

export default Titulo