import { useEffect, useState } from "react"
import ListaTODOs, { Pagina, type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const TerminadasPage = () => {
    const [listaTODOsTerminados, setListaTODOsTerminados] = useState<TODO[]>([])

    const httpObtenerTODOsTerminados = async () => {
        const response = await fetch(`${BACKEND_URL}/todos?estado=1`)
        const data = await response.json()
        setListaTODOsTerminados(data)
    }

    useEffect(() => {
        httpObtenerTODOsTerminados()
    }, [])


    return <div className="container">
        <Titulo texto={ "Histórico" } paginaActual={ Pagina.TERMINADAS }/>
        <Navegacion paginaActual={ Pagina.TERMINADAS } />
        <ListaTODOs data={ listaTODOsTerminados } paginaActual={ Pagina.TERMINADAS } />
    </div>
}

export default TerminadasPage