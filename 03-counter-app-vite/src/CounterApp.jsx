import { useState }  from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {

    //Hook para poder actualizar el estado de la variable counter
    //en pantalla
    const [counter, setCounter] = useState(value);

    const handleAdd = (operation)=> {
       if (operation === '+') {
            setCounter(counter + 1);
        }
        else if (operation === '-') {
            setCounter(counter - 1);
        }
        else {
            setCounter(value);
        }
    }


  return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>

    <button onClick={ () => handleAdd('+')}>+1</button>
    <button onClick={() => handleAdd('-')}>-1</button>
    <button onClick={() => handleAdd('R')}>Reset</button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
    }

CounterApp.defaultProps = {
    value: 1
    }    