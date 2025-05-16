import ListaTODOs, { Pagina, type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const TerminadasPage = () => {
    const listaMock : TODO[] = [
        { id : 1, descripcion : "Jugar futbol"}
    ]
    return <div className="container">
        <Titulo texto={ "Histórico" }/>
        <Navegacion />
        <ListaTODOs data={ listaMock } paginaActual={ Pagina.TERMINADAS } />
    </div>
}

export default TerminadasPage