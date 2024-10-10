//importacion de react
import React from 'react';
//para renderizar en el dom
import ReactDOM from 'react-dom/client';

//importar estilos css
import './styles.css';

// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
// import { TareaApp } from './TareaApp';


import { CounterApp } from './CounterApp';


//forma de renderizar en el dom
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp />
        <FirstApp /> */}

        {/* <TareaApp value={2} /> */}

        <CounterApp value={1}/>
    </React.StrictMode>);