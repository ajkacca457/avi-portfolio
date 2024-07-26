import React from 'react'
import Form from '../components/Form'
import Info from '../components/Info'

const Contact = () => {
  return (
    <div className='grid grid-cols-2 h-screen place-items-center px-4'>
      <Form />
      <Info/>
    </div>
  )
}

export default Contact