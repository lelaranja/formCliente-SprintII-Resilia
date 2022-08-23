import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/clientes' element={<Clients />}/>
      <Route path='/cadastro' element={<Registration />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
