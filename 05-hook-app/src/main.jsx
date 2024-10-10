import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainApp } from './09-useContext/MainApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
//import { TodoApp } from './08-useReducer/TodoApp'
//mport { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp.jsx'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

//import './08-useReducer/intro-reducer'

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/*<StrictMode>*/}
    <MainApp />
  {/*</StrictMode>,*/}
  </BrowserRouter>
)
