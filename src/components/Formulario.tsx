import { useState } from "react"

interface FormularioProps {
    agregar : (texto : string) => void
}

const Formulario = (props : FormularioProps) => {
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
                        props.agregar(textoTODO)
                    } }>
                        Agregar
                </button>
            </div>
        </div>
    </div>
}

export default Formulario