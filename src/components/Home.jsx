import React from 'react'
import { useState } from 'react'
// import './App.css'
import Header from './Header'
import ProductList from './ProductList'
import Cart from './Cart'
import Footer from './Footer'

const Home = () => {

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
      <Footer />
        </>

  )
}

export default Home
