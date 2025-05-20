import { useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, { Pagina, type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    const titulo = "TODO App"

    const listaTODOsStr = localStorage.getItem("TODOS")
    let listaTODOs : TODO[]
    if (listaTODOsStr == null) {
        listaTODOs = []
    }else {
        listaTODOs = JSON.parse(listaTODOsStr)
    }

    const [ lista, setLista ] = useState<TODO[]>(listaTODOs)

    /*const lista : TODO[] = [
        { id : 1, descripcion : "Ir al cine" },
        { id : 2, descripcion : "Limpiar la casa"},
        { id : 3, descripcion : "Dormir"}
    ]*/

    const agregarTODO = (texto : string) => {
        console.log("se ejecuta")
        lista.push({
            id : lista.length + 1,
            descripcion : texto
        })
        setLista([...lista])
    }

    return <div className="container">
        <Titulo texto={ titulo } paginaActual={ Pagina.MAIN }/>
        <Navegacion paginaActual={ Pagina.MAIN }/>
        <Formulario agregar={ agregarTODO }/>
        <ListaTODOs data={ lista } paginaActual={ Pagina.MAIN }/>
    </div>
}

export default MainPage