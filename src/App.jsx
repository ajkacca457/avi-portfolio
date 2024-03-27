import { useState } from 'react'
import Header from './components/Header'
import Social from './components/Social'

function App() {

  return (
    <div className='max-w-content mx-auto'>
      <Header />
      <Social />  
      <h1 className='bg-red-200'>Hello World</h1>
    </div>
  )
}

export default App
