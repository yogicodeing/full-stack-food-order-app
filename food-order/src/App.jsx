import './App.css'
import Login from './components/LoginAndReg/Login';
import Registration from './components/LoginAndReg/Registration';
import Navbar from './components/Navbar/Navbar'
import HomeScreen from './components/screens/HomeScreen/HomeScreen'
import Cart from './components/screens/cart/Cart';


import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  
return (
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />

      </Routes>
   </BrowserRouter>
  )
}

export default App
