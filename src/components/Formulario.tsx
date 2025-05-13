import { useState } from "react"

const Formulario = () => {
    const [ textoTODO, setTextoTODO ] = useState<string>("")

    const textoTODOOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTextoTODO(e.currentTarget.value)
    }

    return <div className="mt-4">
        <div className="row">
            <div className="col-md-10">
                <input className="form-control" 
                    type="text"
                    value={ textoTODO }
                    onChange={ textoTODOOnChange } />
            </div>
            <div className="col-md-2">
                <button className="btn btn-success" 
                    type="button"
                    onClick={ () => {
                        console.log("Debe agregar elemento: " + textoTODO)
                    } }>
                        Agregar
                </button>
            </div>
        </div>
    </div>
}

export default Formulario