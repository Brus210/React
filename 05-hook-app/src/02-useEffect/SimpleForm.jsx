import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'brus210',
        email: 'brunoufh123@yahoo.com'
    });

    const {username,email} = formState;

    const onInputChange = ({target}) => {
        const {name,value} = target;

        //cambiamos el estado del formulario
        setFormState({
            //destructuramos el estado actual
            ...formState,
            
            [name]: value
        });
    }

    //efectos secundarios
    //no se recomienda usar useEffect sin depend
    // ya que se ejecutara cada vez que se renderice el componente

    //mejor separar los efectos secundarios en diferentes useEffect
    //para que sea mas facil de leer
    useEffect(() => {
        // console.log('Hey!');

    },[]);

    useEffect(() => {
        // console.log('FormState Changed!');

    },[formState]);

    useEffect(() => {
        // console.log('email Changed!');

    },[email]);
    
  return (
    <>
    <h1>Formulario simple</h1>
    <hr />

    <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>

    <input type="email" className="form-control mt-2" placeholder="example@example.com" name="email" value={email} onChange={onInputChange}/>

    {
        (username === '123') && <Message />
    }
    </>
  )
}
