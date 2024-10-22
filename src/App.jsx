import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";

const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [isClicked, setClicked] = useState(false)

  return (
     <Router>
      <>
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        setSortOption={setSortOption}
        isClicked={isClicked}
        setClicked={setClicked}
      />
      {isClicked ? <Cart /> : <ProductList searchQuery={searchQuery} sortOption={sortOption} />}
        <>
          <Routes>
            <Route path='cart' element={<Cart />} />
          </Routes>
        </>
        </>
      </Router>

  )
}

export default App
