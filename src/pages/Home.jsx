import React, { useEffect } from 'react'
import useProductsCalls from '../hooks/useProductsCalls'

const Home = () => {
  const {getProducts}=useProductsCalls()
  useEffect(() => {
    
  getProducts()
   
  }, [])
  
  return (
    <div>Home</div>
  )
}

export default Home