import React from 'react'
import {useForm} from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {
  
  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  });
  const onfFormSubmit = (e) => {
    e.preventDefault();
    if(description.length <= 1) return;
    
      const newTodo = {
        id: new Date().getTime(),
        description: description,
        done: false
      }
    
    
    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  }
  
  return (

    <form onSubmit={onfFormSubmit}>
                    <input 
                      type="text" 
                      placeholder='Que hay que hacer' 
                      className='form-control'
                      name='description'
                      value={description}
                      onChange={onInputChange} />
                    <button type='submit' className='btn btn-primary mt-2'>Agregar</button>
                </form>
  )
}
