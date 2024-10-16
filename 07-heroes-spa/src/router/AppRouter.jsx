import { Route, Routes } from 'react-router-dom'
// import { MarvelPage } from '../heroes/pages/MarvelPage'
// import { DcPage } from '../heroes/pages/DcPage'
import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'

export const AppRouter = () => {
  return (
    <>
    <Routes>    
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/*" element={<HeroesRoutes/>} />
    </Routes>
    
    </>

)
}
