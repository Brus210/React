import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef();

    //console.log(ref);
    const onClick = () => {
        inputRef.current.select();
    }


  return (
    <>
    <h1>FocusScreen</h1>

    <hr />

    <input ref={inputRef} className='form-control' type="text" placeholder='Ingrese su nombre'/>

    <button onClick={onClick}  className='btn btn-primary mt-2'>Set Focus</button>
    </>
  )
}
