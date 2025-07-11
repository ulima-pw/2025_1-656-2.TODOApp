import { useState } from "react"

export interface Project {
    id: string;
    name: string;
}

interface FormularioProps {
    agregar: (texto: string) => void;
    projects: Project[];
    onProjectChange: (projectId: string) => void;
}

const Formulario = (props: FormularioProps) => {
    const [textoTODO, setTextoTODO] = useState<string>("");
    const [selectedProject, setSelectedProject] = useState<string>("");

    const textoTODOOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextoTODO(e.currentTarget.value);
    };

    const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProject(e.target.value);
        props.onProjectChange(e.target.value);
    };

    return <div className="mt-4">
        <div className="row mb-2">
            <div className="col-md-12">
                <select className="form-select" value={selectedProject} onChange={handleProjectChange}>
                    <option value="">Selecciona un proyecto</option>
                    {props.projects.map(project => (
                        <option key={project.id} value={project.id}>{project.name}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className="row">
            <div className="col-md-10">
                <input className="form-control"
                    type="text"
                    value={textoTODO}
                    onChange={textoTODOOnChange} />
            </div>
            <div className="col-md-2">
                <button className="btn btn-success"
                    type="button"
                    onClick={() => {
                        props.agregar(textoTODO)
                    }}>
                        Agregar
                </button>
            </div>
        </div>
    </div>
}

export default Formulario