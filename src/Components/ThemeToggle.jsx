import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggle = ({theme, setTheme}) => {

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');

    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
  }, [])

//theme toggle functionality
  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
      localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <>
    <button>
        {theme === 'dark' ? (
            <img onClick={() => setTheme('light')} src={assets.sun_icon} className='size-8.7 p-1.5 border border-gray-600 rounded-full' alt="" />
        ) : (
            <img onClick={() => setTheme('dark')} src={assets.moon_icon} className='size-8.7 p-1.5 border border-gray-600 rounded-full' alt=''/>
        )}
    </button>
      
    </>
  )
}

export default ThemeToggle
