import S from './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import MenuLateral from './components/MenuLateral/MenuLateral'
import Home from '../pages/Home/Home'
import Clients from '../pages/Clients/Clients'
import Registration from '../pages/Registration/Registration'

function App() {

  return (
    <BrowserRouter>
    <div className={S.divPai}>
    <MenuLateral/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/clientes' element={<Clients />}/>
      <Route path='/cadastro' element={<Registration />}/>
    </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
