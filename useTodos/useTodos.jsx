import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


export const useTodos = () => {



    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || [])

    }
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos) );
    
      
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }
        const handleDeleteTodo = (id) => {

        dispatch({
            type: '[TODO] remove Todo',
            payload: id
        });


    };

    const handleToggleTodo = (id) => {
        //console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    const todosCount = (todos)=>todos.length;    
    
    const pendingTodosCount = (todos)=> todos.filter(todo=> !todo.done).length;
    


return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
}
}