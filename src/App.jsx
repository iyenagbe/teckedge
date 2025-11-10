import React, { useState } from 'react'
import Navber from './Components/Navbar'
import HeroFile from './Components/HeroFile';
import Trusted from './Components/Trusted';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Teams from './Components/Teams';

const App = () => {
  const [theme, setTheme] = useState(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
);

  return (
    <div className='dark:bg-black relative'>
      <Navber theme={theme} setTheme={setTheme}/>
      <HeroFile />
      <Trusted />
      <Services />
      <OurWork />
      <Teams />
    </div>
    
  )
}

export default App
