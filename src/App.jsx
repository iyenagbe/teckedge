import React, { useState } from 'react'
import Navber from './Components/Navbar'
import HeroFile from './Components/HeroFile';
import Trusted from './Components/Trusted';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Teams from './Components/Teams';
import Contact from './Components/Contact';
import {Toaster} from 'react-hot-toast'

const App = () => {
  const [theme, setTheme] = useState(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
);

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navber theme={theme} setTheme={setTheme}/>
      <HeroFile />
      <Trusted />
      <Services />
      <OurWork />
      <Teams />
      <Contact />
      
    </div>
    
  )
}

export default App
