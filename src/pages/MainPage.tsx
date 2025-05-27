import { useEffect, useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, { Pagina, type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const URL = "https://script.google.com/macros/s/AKfycbxR06kwYzBmVIy9NoLCq1ddnLj4PIT9uGvPNiK_I5aAob7qrYUs-Q7XPfLab3Lk1ZD9KQ/exec"

const MainPage = () => {
    const titulo = "TODO App"

    const [ lista, setLista ] = useState<TODO[]>([])

    const httpObtenerTODOs = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setLista(data)
    }

    const httpGuardarTODO = async (id : number, desc : string) => {
        const todo = {
            id : id,
            descripcion : desc
        }
        const response = await fetch(URL, {
            method : "post",
            body : JSON.stringify(todo)
        })

        const data = await response.json()
        console.log(data)
    }

    const agregarTODO = (texto : string) => {
        console.log("se ejecuta")
        lista.push({
            id : lista.length + 1,
            descripcion : texto
        })
        sessionStorage.setItem("TODOS", JSON.stringify(lista))
        setLista([...lista])
        httpGuardarTODO(lista.length + 1, texto)
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