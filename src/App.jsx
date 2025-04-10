import './App.css'
import Navbar from './Components/Nav/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory category="mens"/>}/>
          <Route path='/womens' element={<ShopCategory category="womens"/>}/>
          <Route path='/kids' element={<ShopCategory category="kids"/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/cart' element={<cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
 
}

export default App
