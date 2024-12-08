
import './css/style.css'
import PropiedadesListContainer from './PropiedadesListContainer/PropiedadesListContainer'
import NavBar from './NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>

      <BrowserRouter>
        
        <NavBar/>

        <Routes>

          <Route path='/' element={<PropiedadesListContainer/>} />
          <Route path='/categoria/:tipoProp' element={<PropiedadesListContainer/>} />


        </Routes>
      
        
       

      </BrowserRouter> 


    </>
  )
}

export default App
