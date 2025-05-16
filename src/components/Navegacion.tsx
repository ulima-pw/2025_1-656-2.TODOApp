import { Link } from "react-router-dom"
import { Pagina } from "./ListaTODOs"

interface NavegacionProps {
    paginaActual : Pagina
}

const Navegacion = (props : NavegacionProps) => {
    return <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={ (() => {
                    if (props.paginaActual == Pagina.MAIN) {
                        return "nav-link active"
                    }else {
                        return "nav-link"
                    }
                })() } to={ "/" }>
                    Tareas
                </Link>
            </li>
            <li className="nav-item">
                <Link className={ (() => {
                    if (props.paginaActual == Pagina.TERMINADAS) {
                        return "nav-link active"
                    }else {
                        return "nav-link"
                    }
                })() }  to={ "/terminadas" }>
                    Terminadas
                </Link>
            </li>
        </ul>
    </div>
}

export default Navegacion