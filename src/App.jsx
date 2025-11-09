import React, { useState } from 'react'
import Navber from './Components/Navbar'
import HeroFile from './Components/HeroFile';

const App = () => {
  const [theme, setTheme] = useState(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
);

  return (
    <div className='dark:bg-black relative'>
      <Navber theme={theme} setTheme={setTheme}/>
      <HeroFile />
    </div>
    
  )
}

export default App
