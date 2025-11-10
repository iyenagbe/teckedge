import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title: 'Mobile App Development',
            description: 'Creating user-friendly mobile applications for iOS and Android.',
            image: 'assets.work_mobile_app'
        },

        {
            title: 'Dashboard Management',
            description: 'We help you execute your plans and deliver results.',
            image: 'assets.work_dashboard_management'
        },

        {
            title: 'Fitness and Health App',
            description: 'We heklp you create a marketing strategy taht drives results.',
            image: 'assets.work_fitness_app'
        }
    ]
  return (
    <div id='our work' className='flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-23 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <Title  title='Our lastest work' desc='From strategy to execution, we craft cutting-edge digital solutions that move your business forward.'/>

      <div className='grid sm:grid-cols-3 ld:grid-cols-3 gap-5 w-full max-w-5xl'>
        {
            workData.map(( work, index) =>(
                <div key={index} className='hover-scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='w-full rounded-xl' alt="" />
                    <h3 className='mt-3 mb-2 text-lg font-medium'>{work.title}</h3>

                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </div>
            ))
        }

      </div>

    </div>
  )
}

export default OurWork
