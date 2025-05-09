import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    const titulo = "TODO App"

    const lista : TODO[] = [
        { id : 1, descripcion : "Ir al cine" },
        { id : 2, descripcion : "Limpiar la casa"}
    ]

    return <div className="container">
        <Titulo texto={ titulo }/>
        <Navegacion />
        <Formulario />
        <ListaTODOs data={ lista }/>
    </div>
}

export default MainPage