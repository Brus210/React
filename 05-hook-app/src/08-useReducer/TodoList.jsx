import { TodoItem } from '../08-useReducer/TodoItem'

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {

  return (
    <ul className='list-group'>
        {
            todos.map( todo => ( 
                //TodoItem .... mandar info correcta (id, descripcion, done)
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onDeleteTodo={ onDeleteTodo} 
                    onToggleTodo = {onToggleTodo}
                />
            ))    
        }
    </ul>
  )
}
