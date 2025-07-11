import type AddTodoRequestType from "../types/AddTodoRequestType"
import type UpdateTodoRequestType from "../types/UpdateTodoRequestType"


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const TodoServices = () => {
    const getTodos = async (usuario : string) => {
        const response = await fetch(
            `${BACKEND_URL}/todos?estado=0&usuarioid=${JSON.parse(usuario).id}`)
        return await response.json()
    }

    const addTodo = async (req : AddTodoRequestType) => {
        const response = await fetch(`${BACKEND_URL}/todos`, {
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(req)
        })
        return await response.json()
    }

    const updateTodo = async (req : UpdateTodoRequestType) => {
        const response = await fetch(`${BACKEND_URL}/todos`, {
            method : "put",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(req)
        })

        return await response.json()
    }

    return {
        getTodos,
        addTodo,
        updateTodo
    }
}

export default TodoServices