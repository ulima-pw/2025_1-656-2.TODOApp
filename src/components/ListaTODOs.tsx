export interface TODO {
    id : number,
    descripcion : string
}

interface ListaTODOsProps {
    data : TODO[]
}

const ListaTODOs = (props : ListaTODOsProps) => {
    return <div className="mt-4">
        <ul className="list-group">
            {
                props.data.map( (elemento : TODO) => {
                    return <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            { elemento.descripcion }
                        </div>
                        <input className="form-check-input" type="checkbox" />
                    </li>
                })
            }
        </ul>
    </div>
}

export default ListaTODOs