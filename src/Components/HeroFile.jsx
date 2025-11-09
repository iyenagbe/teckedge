import React from 'react'
import assets from '../assets/assets'

const HeroFile = () => {
  return (

    //hero section
    <div id='herofile' className='flex flex-col items-center gap-5 py-20 sm:px-11 dark:text-white lg:px-23 xl:px-40 text-center w-full overflow-hidden text-gray-700'>


    {/* group_profile */}
        <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-5 rounded-full'>

            <img className='w-20' src={assets.group_profile} alt="" />

            <p className='text-xs font-medium'>Trusted by 5m+ people</p>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[83px] font-medium xl:leading-[95px] max-w-5xl'>Turning imaginations into 
            <span className='bg-gradient-to-r from-[#5044E5] to-[#8b5cf6]  bg-clip-text text-transparent'> digital</span> impact.</h1>

            <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/74 max-w-4/5 sm:max-w-lg pb-3'>Creating meanifull bridge and turning dreams into interactive digital user experience.</p>
            {/* //hero image */}
            <div className='relative'>
                <img src={assets.hero_img} className='w-full max-w-6xl' alt="" />

                <img src={assets.bgImage1} className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' alt="" />
            </div>
      
    </div>
  )
}

export default HeroFile
