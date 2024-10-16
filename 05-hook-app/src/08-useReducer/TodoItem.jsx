
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <>
            <li  className='list-group-item d-flex justify-content-between'>
                <span 
                    onDoubleClick={() => onToggleTodo(todo.id)} 
                    className={`align-self-center  ${todo.done ? 'text-decoration-line-through' : ''} `}
                    >{todo.description}</span>
                    <div className='d-flex   '>
                        
                        <button onClick={() => onDeleteTodo(todo.id)} className='btn btn-danger'>Borrar</button>
                    </div>
            </li>
    </>
  )
}
