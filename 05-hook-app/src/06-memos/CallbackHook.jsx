import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(1);
    
    
    
    
    const incrementF =useCallback(
      (c) => {
        setCounter( (value) => value + c);
      },
      [],
    )
    


    // const incrementF = ()=> {
    //     setCounter(counter + 1);
    // }



  return (
    <>
    <h1>useCallback Hooj: {counter}</h1>
    
    <hr />
    <ShowIncrement increment = {incrementF}  />
    
    </>
)
}
