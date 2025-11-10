// import React from 'react'
// import assets from '../assets/assets'
// import Title from './Title'

// const Services = () => {

//     const servicesData = [
//         {
//             title: 'Web Development',
//             description: 'Building responsive and modern websites.',
//             icon: assets.ads_icon
//         },
//         {
//             title: 'Mobile App Development',
//             description: 'Creating user-friendly mobile applications for iOS and Android.',
//             icon: assets.ads_icon
//         },
//         {
//             title: 'Web3 Development',
//             description: 'Developing decentralized applications and smart contracts.',
//             icon: assets.ads_icon
//         },
//         {
//             title: 'Advertising',
//             description: 'Promoting your brand through targeted campaigns.',
//             icon: assets.ads_icon
//         },
//         {
//             title: 'Content Creation/Marketing',
//             description: 'We help you execute your plan and deliver results.',
//             icon: assets.marketing_icon
//         },
//         {
//             title: 'Content Writing',
//             description: 'We help you to create a marketing strateging that drives results.',
//             icon: assets.ads_icon
//         },
//         {
//             title: 'Social Media',
//             description: 'We help you build strong socia media presence and engage with your audience.',
//             icon: assets.ads_icon
//         },

//     ]
//   return (
//     <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 pt-30 xl:px-40 text-gray-700 dark:text-white'>

//         <img src={assets.bgImage2} className='absoluye -top-110 -left-7- -z-1 dark:hidden' alt="" />


//         <Title title="How can we help?" desc='From strategy to execution, we craft cutting edge digital solutions taht move your business forward.'/>
      
//     </div>
//   )
// }

// export default Services


import React from 'react';
import assets from '../assets/assets';
import Title from './Title';

const Services = () => {
  const servicesData = [
    { title: 'Web Development', description: 'Building responsive and modern websites.', icon: assets.ads_icon },
    { title: 'Mobile App Development', description: 'Creating user-friendly mobile applications for iOS and Android.', icon: assets.ads_icon },
    // { title: 'Web3 Development', description: 'Developing decentralized applications and smart contracts.', icon: assets.ads_icon },
    // { title: 'Web3 Development', description: 'Developing decentralized applications and smart contracts.', icon: assets.ads_icon },
    // { title: 'Web3 Development', description: 'Developing decentralized applications and smart contracts.', icon: assets.ads_icon },
    { title: 'Advertising', description: 'Promoting your brand through targeted campaigns.', icon: assets.ads_icon },
    { title: 'Content Creation/Marketing', description: 'We help you execute your plan and deliver results.', icon: assets.marketing_icon },
    { title: 'Content Writing', description: 'We help you to create a marketing strategy that drives results.', icon: assets.content_icon },
    { title: 'Social Media', description: 'We help you build strong social media presence and engage with your audience.', icon: assets.social_icon },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 pt-30 xl:px-40 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        className="absolute -top-28 -left-7 -z-10 dark:hidden"
        alt=""
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft cutting-edge digital solutions that move your business forward."
      />

      {/* Render Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer
                       hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:rotate-6"
            />
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) =>(
            <serviceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
