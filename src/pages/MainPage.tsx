import Formulario from "../components/Formulario"
import ListaTODOs from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    return <div className="container">
        <Titulo />
        <Navegacion />
        <Formulario />
        <ListaTODOs />
    </div>
}

export default MainPage