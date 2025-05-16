import { useState } from "react"
import { Pagina } from "./ListaTODOs"
import { useNavigate } from "react-router-dom"

interface TituloProps {
    texto : string
    paginaActual : Pagina
}


const Titulo = (props : TituloProps) => {
    const navigate = useNavigate()

    const [ contadorClicks, setContadorClicks ] = useState<number>(0)

    const contadorOnClick = () => {
        setContadorClicks(contadorClicks + 1)
    }

    return <h1 className="d-flex justify-content-between align-items-start" 
                onClick={ contadorOnClick }>
        { props.texto + " " + contadorClicks }
        {
            props.paginaActual == Pagina.TERMINADAS 
                ? <button className="btn btn-primary mt-3 me-3" 
                    onClick={ () => {
                        navigate("/")
                    } }
                    type="button">
                        Regresar
                  </button> 
                : ""
        }
        
    </h1>
}

export default Titulo