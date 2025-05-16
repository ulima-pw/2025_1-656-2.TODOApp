import { Link } from "react-router-dom"

const Navegacion = () => {
    return <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link active" to={ "/" }>
                    Tareas
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={ "/terminadas" }>
                    Terminadas
                </Link>
            </li>
        </ul>
    </div>
}

export default Navegacion