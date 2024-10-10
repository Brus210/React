import { UserContext } from "./UserContext"
const user={
    id: 1234,
    name: 'Fernando',
    email: 'hola@gmail.com'
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value ={{hola: 'Mundo', user: user}}>
        {children}
    </UserContext.Provider>
  )
}
