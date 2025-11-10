// import React from 'react'
// import { company_logos } from '../assets/assets'

// const Trusted = () => {
//   return (
//     // trusted by leading companies section
//     <div className='flex flex-col items-center px-4 sm:px-12 xl:px38 gap-10 text-gray-700 dark:text-white/80'>
//       <h3 className='font-semibold'>Trusted Leading Companies</h3>

//         <div className='flex items-center justify-center flex-wrap gap-9 m-4'>
//             {company_logos.map((logo, index) => {
//                 <img key={index} src={'logo'} className='max-h-5 sm:max-h-6 dark:drop-shadow-xl' alt="" />
//             })}

//         </div>

//     </div>
//   )
// }

// export default Trusted


import React from 'react';
import { company_logos } from '../assets/assets';

const Trusted = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
      <h3 className="font-semibold text-lg">Trusted Leading Companies</h3>

      <div className="flex items-center justify-center flex-wrap gap-9 m-4">
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Trusted;
