import { useEffect } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, { Pagina, type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"
import useMainViewModel from "../../viewmodels/useMainViewModel"

const MainPage = () => {
    const { httpObtenerTODOs, fetchProjects,
        agregarTODO, projects, handleProjectChange,
        lista, marcarTODO
     } = useMainViewModel()

    const titulo = "TODO App"
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