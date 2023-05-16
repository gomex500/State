import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Eje1 from './ejercicio1';
import Eje2 from './ejercicio2';
import Eje3 from './ejercicio3';
import Eje4 from './ejercicio4';
import Eje5 from './ejercicio5';
import '../css/menu.css';
import '../css/main.css'

function Menu() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Eje1/>}/>
          <Route path='/ejercicio2' element={<Eje2/>}/>
          <Route path='/ejercicio3' element={<Eje3/>}/>
          <Route path='/ejercicio4' element={<Eje4/>}/>
          <Route path='/ejercicio5' element={<Eje5/>}/>
        </Routes>
    </div>
  )
}

export default Menu;