import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';

const App = () => {

  return (
    
     <Router>
      <>
        <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='products' element={<Home />}/>
              <Route path='cart' element={<Cart />} />
        </Routes>
      </>
      </Router>

  )
}

export default App
