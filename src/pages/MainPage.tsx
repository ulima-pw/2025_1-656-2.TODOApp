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
        const response = await fetch(`${URL}/todos?estado=0`)
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

    const httpModificarTODO = async(todo :TODO) => {
        const response = await fetch(`${URL}/todos`, {
            method : "put",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(todo)
        })

        const data = await response.json()
        if (data.msg != "") {
            console.error(data.msg)
        }
    }

    const agregarTODO = async (texto : string) => {
        await httpGuardarTODO(texto)
        await httpObtenerTODOs()
    }

    const marcarTODO = async (id : number) => {
        await httpModificarTODO({
            id : id,
            estado : 1
        })
        await httpObtenerTODOs()
    }

    useEffect(() => {
        httpObtenerTODOs()
    }, [])

    return <div className="container">
        <Titulo texto={ titulo } paginaActual={ Pagina.MAIN }/>
        <Navegacion paginaActual={ Pagina.MAIN }/>
        <Formulario agregar={ agregarTODO }/>
        <ListaTODOs 
            data={ lista } 
            paginaActual={ Pagina.MAIN }
            marcarTodoHandler={ marcarTODO }/>
    </div>
}

export default MainPage