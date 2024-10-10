

const initialState = [{ 
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done:false
 }];


 const todoReducer = (state = initialState, action ) => {
    if(action?.type === 'add'){
        return [...state, action.payload];
    }

    if(action?.type === 'delete'){
        return state.filter(todo => todo.id !== action.payload);
    }
    


    //siempre se debe retornar un nuevo estado
    return state;
 }


 let todos = todoReducer();

 const newTodo = {
        id: 2,
        todo: 'Recolectar la piedra del Poder',
        done:false
 }

 const addTodoAction = {
    type: 'add',
    payload: newTodo,
 }

 todos = todoReducer(todos, addTodoAction);
 console.log(todos);