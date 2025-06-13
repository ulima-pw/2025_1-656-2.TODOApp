import { useEffect, useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, { Pagina, type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const URL = "http://localhost:5000" // URL Base

const MainPage = () => {
    const titulo = "TODO App"

    const [ lista, setLista ] = useState<TODO[]>([])

    const httpObtenerTODOs = async () => {
        const response = await fetch(`${URL}/todos`)
        const data = await response.json()
        setLista(data)
    }

    const httpGuardarTODO = async (desc : string) => {
        const todo = {
            descripcion : desc,
            estado : 0 // estado inicial de TODO
        }
        const response = await fetch(`${URL}/todos`, {
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(todo)
        })

        const data = await response.json()
        console.log(data)
    }

    const agregarTODO = async (texto : string) => {
        await httpGuardarTODO(texto)
        await httpObtenerTODOs()
    }

    useEffect(() => {
        httpObtenerTODOs()
    }, [])

    return <div className="container">
        <Titulo texto={ titulo } paginaActual={ Pagina.MAIN }/>
        <Navegacion paginaActual={ Pagina.MAIN }/>
        <Formulario agregar={ agregarTODO }/>
        <ListaTODOs data={ lista } paginaActual={ Pagina.MAIN }/>
    </div>
}

export default MainPage