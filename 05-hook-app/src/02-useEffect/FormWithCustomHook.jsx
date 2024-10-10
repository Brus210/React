import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
//import { Message } from "./Message";

export const FormWithCustomHook = () => {
    
    const {formState, onResetForm, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    //const {username, email, password} = formState;

    // efectos secundarios
    // no se recomienda usar useEffect sin depend
    // ya que se ejecutara cada vez que se renderice el componente
    // mejor separar los efectos secundarios en diferentes useEffect
    // para que sea mas facil de leer
    // useEffect(() => {
    //     console.log('Hey!');
    // },[]);
    // useEffect(() => {
    //     console.log('FormState Changed!');
    // },[formState]);
    // useEffect(() => {
    //     console.log('email Changed!');
    // },[email]);
    
  return (
    <>
    <h1>Form With Custom Hook</h1>
    <hr />

    <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>

    <input type="email" className="form-control mt-2" placeholder="example@example.com" name="email" value={email} onChange={onInputChange}/>

    <input type="password" className="form-control mt-2"  name="password" placeholder="Contraseña" value={password} onChange={onInputChange}/>


    <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>



    {
        (username === '123')
    }
    </>
  )
}
