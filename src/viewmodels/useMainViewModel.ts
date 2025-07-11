import { useState } from "react"
import type { TODO } from "../views/components/ListaTODOs"
import type { Project } from "../views/components/Formulario"
import TodoServices from "../models/services/TodoServices"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const useMainViewModel = () => {
    const [ lista, setLista ] = useState<TODO[]>([])
    const [ projects, setProjects ] = useState<Project[]>([])

    const todoServices = TodoServices()

    const httpObtenerTODOs = async () => {
        const usuario = sessionStorage.getItem("USUARIO")
        if (usuario == null) {
            // TODO: Mejorar el manejo de la sesion
            return
        }

        
        const data = await todoServices.getTodos(usuario)
        setLista(data)
    }

    const httpGuardarTODO = async (desc : string) => {
        const data= await todoServices.addTodo({
            descripcion : desc,
            estado : 0
        })
        
        console.log(data)
    }

    const httpModificarTODO = async(todo :TODO) => {
        const data = await todoServices.updateTodo(todo)
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

    return {
        lista,
        projects,
        handleProjectChange,
        agregarTODO,
        marcarTODO,
        httpObtenerTODOs,
        fetchProjects
    }
}

export default useMainViewModel