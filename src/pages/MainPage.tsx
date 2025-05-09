import Formulario from "../components/Formulario"
import ListaTODOs from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    const titulo = "TODO App"

    return <div className="container">
        <Titulo texto={ titulo }/>
        <Navegacion />
        <Formulario />
        <ListaTODOs />
    </div>
}

export default MainPage