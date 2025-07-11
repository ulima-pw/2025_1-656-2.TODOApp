export interface TODO {
    id : number;
    descripcion? : string;
    estado? : number
}

export enum Pagina {
    MAIN, TERMINADAS
}

interface ListaTODOsProps {
    data : TODO[]
    paginaActual : Pagina
    marcarTodoHandler? : (id : number) => void
}

const ListaTODOs = (props : ListaTODOsProps) => {
    return <div className="mt-4">
        <ul className="list-group">
            {
                props.data.map( (elemento : TODO) => {
                    return <li key={ elemento.id } className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            { elemento.descripcion }
                        </div>
                        {
                            props.paginaActual == Pagina.MAIN  ? 
                                <input className="form-check-input" 
                                    type="checkbox" 
                                    onClick={ () => {
                                        if (props.marcarTodoHandler != undefined) {
                                            props.marcarTodoHandler(elemento.id)
                                        }
                                    }} /> : 
                                ""
                        }
                        
                    </li>
                })
            }
        </ul>
    </div>
}

export default ListaTODOs