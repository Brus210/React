
import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';




export const TodoApp = () => {

    const {todos, todosCount, todosPending, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos();


  return (
    <>
        <h1 >Todo App: {todosCount}, <small>Pendientes: {todosPending}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

            {/* TodoList, todos */}
                <TodoList todos={todos} onDeleteTodo={id =>handleDeleteTodo(id)} onToggleTodo={id => handleToggleTodo(id)}/>
            {/*fin TodoList, todos */}
            
            </div>
            <div className="col-5">
                {/* TodoApp onNewTodo(todo un todo)
                    {id, description:caja de texto, done:false}
                    */}
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={todo => handleNewTodo(todo)}/>
                {/* fin TodoApp */}
            </div>
        </div>

        
    
    </>
)
}
