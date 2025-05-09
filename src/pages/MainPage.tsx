const MainPage = () => {
    return <div className="container">
        { /* Titulo */ }
        <h1>TODO App</h1>
        { /* Navegacion */ }
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <a className="nav-link active" href="#">Tareas</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Terminadas</a>
                </li>
            </ul>
        </div>
        { /* Formulario */ }
        <div className="mt-4">
            <div className="row">
                <div className="col-md-10">
                    <input className="form-control" type="text" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-success" type="button">Agregar</button>
                </div>
            </div>
        </div>
        { /* ListaTODOs */ }
        <div className="mt-4">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Cocinar el almuerzo
                    </div>
                    <input className="form-check-input" type="checkbox" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Cocinar el almuerzo
                    </div>
                    <input className="form-check-input" type="checkbox" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Cocinar el almuerzo
                    </div>
                    <input className="form-check-input" type="checkbox" />
                </li>
            </ul>
        </div>
    </div>
}

export default MainPage