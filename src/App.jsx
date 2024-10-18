import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [isClicked, setClicked] = useState(false)

  return (
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
    </>
  )
}

export default App
