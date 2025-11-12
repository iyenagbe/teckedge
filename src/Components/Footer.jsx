import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (

        // footer section top
    <div className='bg-slate-50 dark:bg-gray-700 pt-10 sm:pt-10 mt-20 m:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>

        <div className='flex justify-between lg:items-center max-lg:flex-col  gap-10'>

            <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400 mb-15'>
                <img src={theme === 'dark' ? assets.teck_logo_dark : assets.teck_logo} className='w-30 sm:w-42' alt="" />
                <p className='max-w-md'>From strategy to execution, we craft cutting-edge digital solutions that move your business forward. </p>

                <ul className='flex gap-6'>
                    <li><a className='hover:text-primary' href="#hero">Home</a></li>
                    <li><a className='hover:text-primary' href="#services">Services</a></li>
                    <li><a className='hover:text-primary' href="#our-work">Our work</a></li>
                    <li><a className='hover:text-primary' href="#contact-us">Contact Us</a></li>
                </ul>


            </div>
            <div className='text-gray-600 dark:teat-gray-400'>
                <h3 className='font-sembold'>Subscribe to our newsletter</h3>
                <p className='text-sm mt-2 mb-5 '>The latest news, articles, and resources, sent to your inbox weekly.</p>

                <div className='flex gap-3 mb-6'>
                    <input type="email" placeholder='Enter your email' className='w-full p-3 tezt-sm outline-none rounede dark:text-gray-200 bg-transparent border border-gray-300 dark:text-gray-500'/>

                    <button className='bg-primary text-white rounded px-6 cursor-pointer'>Subcribe</button>
                </div>
            </div>

                
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-y'/>
        {/* footer section bottom */}
        <div className='pb-6 text-sm text-gray-500 flex justify-between gap-4 flex-wrap'>
            <p >© 2025 TeckEdge. All rights reserved.</p>
            <div className='flex items-center justify-between gap-4'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

      
    </div>
  )
}

export default Footer
