import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}



export const useTodos = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      console.log('todos', todos);
    }, [todos])
    

    //cuando se agrega un nuevo todo, agregarlo al estado
    const handleNewTodo = (todo) => {
        const action ={
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) => {
        const action ={
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatchTodo(action);
    }

    const handleToggleTodo = (id) => {
        const action ={
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatchTodo(action);
    }


    const todosCount = todos.length;
    const todosPending = todos.filter(todo => !todo.done).length;
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        todosPending
    }
}