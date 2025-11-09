import React, { useState } from 'react'
import Navber from './Components/Navbar'

const App = () => {
  const [theme, setTheme ]= useState('light')
  return (
    <div className='dark:bg-black relative'>
      <Navber theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
