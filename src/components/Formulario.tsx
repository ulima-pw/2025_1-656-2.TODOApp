import { useState } from "react"

const Formulario = () => {
    const [ textoTODO, setTextoTODO ] = useState<string>("")

    return <div className="mt-4">
        <div className="row">
            <div className="col-md-10">
                <input className="form-control" 
                    type="text"
                    value={ textoTODO } />
            </div>
            <div className="col-md-2">
                <button className="btn btn-success" type="button">Agregar</button>
            </div>
        </div>
    </div>
}

export default Formulario