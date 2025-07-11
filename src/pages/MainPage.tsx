import { useEffect, useState } from "react"
import Formulario, { type Project } from "../components/Formulario"
import ListaTODOs, { Pagina, type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const MainPage = () => {
    const titulo = "TODO App"

    const [ lista, setLista ] = useState<TODO[]>([])
    const [ projects, setProjects ] = useState<Project[]>([])

    const httpObtenerTODOs = async () => {
        const usuario = sessionStorage.getItem("USUARIO")
        if (usuario == null) {
            // TODO: Mejorar el manejo de la sesion
            return
        }
        const response = await fetch(
            `${BACKEND_URL}/todos?estado=0&usuarioid=${JSON.parse(usuario).id}`)
        const data = await response.json()
        setLista(data)
    }

    const httpGuardarTODO = async (desc : string) => {
        const todo = {
            descripcion : desc,
            estado : 0 // estado inicial de TODO
        }
        const response = await fetch(`${BACKEND_URL}/todos`, {
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
        const response = await fetch(`${BACKEND_URL}/todos`, {
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

    const fetchProjects = async () => {
        const response = await fetch(`${BACKEND_URL}/projects`)
        const data = await response.json()
        setProjects(data)
    }

    const handleProjectChange = (projectId: string) => {
        console.log("Selected project:", projectId)
    }

    useEffect(() => {
        httpObtenerTODOs()
        fetchProjects()
    }, [])

    return <div className="container">
        <Titulo texto={ titulo } paginaActual={ Pagina.MAIN }/>
        <Navegacion paginaActual={ Pagina.MAIN }/>
        <Formulario
            agregar={agregarTODO}
            projects={projects}
            onProjectChange={handleProjectChange}
        />
        <ListaTODOs 
            data={ lista } 
            paginaActual={ Pagina.MAIN }
            marcarTodoHandler={ marcarTODO }/>
    </div>
}

export default MainPage