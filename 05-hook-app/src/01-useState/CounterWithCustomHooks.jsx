import { useState } from "react";
import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {
    const {counter, increment, decrement, reset} = useCounter();

    const [value, setValue] = useState(1);

    const handleInputChange = (event) => {
        const inputValue = parseInt(event.target.value, 10);
        setValue(isNaN(inputValue) ? 0 : inputValue);
    };

  return (
    <>
        <h1>Counter with Hooj: {counter}</h1>
        <hr />

        <div className="input-group mb-3">
            <span className="input-group-text">Incremento/Decremento de:</span>
            <input type="text" className="form-control" onChange={handleInputChange} />
        </div>

        <button className="btn btn-primary" onClick={() => increment(value)}>+{value}</button>
        <button className="btn btn-primary" onClick={() =>reset()}>Reset</button>
        <button className="btn btn-primary" onClick={() =>decrement(value)}>-{value}</button>
    </>
  )
}
 