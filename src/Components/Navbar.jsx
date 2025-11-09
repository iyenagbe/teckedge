import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggle from './ThemeToggle';

        const Vavbar = ({ theme, setTheme }) => {
          const [sidebarOpen, setSidebarOpen] = useState(false);

          return (
            <div className='flex justify-between items-center px-4 sm:px-12 lg:px-23 xl:px-38 py-4 top-0 z-20
            backdrop-blur-xl font-medium bg-white/50 dark:bg-grey-900/70'>

              {/* Logo */}
              <img
                src={theme === 'dark' ? assets.teck_logo : assets.teck_logo}
                alt="Teck Logo"
                className="w-30 sm:w-40 cursor-pointer"
                onClick={() => setSidebarOpen(false)}
              />

              {/* Menu Items */}
              <div
                className={`text-gray-700 dark:text-white sm:text-sm ${
                  !sidebarOpen
                    ? 'max-sm:w-0 overflow-hidden'
                    : 'max-sm:w-60 max-sm:pl-10'
                } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full 
                max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
              >
                <a onClick={() => setSidebarOpen(false)} href="#" className='sm:hover:border-b-2 sm:hover:border-primary'>Home</a>
                <a onClick={() => setSidebarOpen(false)} href="#services" className='sm:hover:border-b-2 sm:hover:border-primary'>Services</a>
                <a onClick={() => setSidebarOpen(false)} href="#our-work" className='sm:hover:border-b-2 sm:hover:border-primary'>Our Work</a>
                <a onClick={() => setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b-2 sm:hover:border-primary'>Contact Us</a>
              </div>

              {/* Contact Button */}
              <div className='flex items-center gap-2 sm:gap-4'>


                <ThemeToggle theme={theme} setTheme={setTheme} />

                <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden' />
                
                <a
                  className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'
                  href="#contact-us"
                >
                  Connect <img src={assets.arrow_icon} width={15} alt="" />
                </a>
              </div>
            </div>
          )
        }

        export default Vavbar
