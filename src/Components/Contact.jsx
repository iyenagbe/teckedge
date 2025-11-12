import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    formData.append("access_key", "62ebe6d9-d763-4cbd-8f7e-dc5f5b70ea6b")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Message sent successfully!")
        e.target.reset()
      } else {
        toast.error("Something went wrong!")
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div id='Contact-Us' className='flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-600 dark:text-white'>

      <Title 
        title='Reach out to us' 
        desc='From strategy to execution, we craft digital solutions that move your business forward.' 
      />

      <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

        {/* Name Input */}
        <div>
          <p className='mb-3 text-sm font-medium'>Your name</p>
          <div className='flex items-center gap-2 p-3 rounded-lg border border-gray-400 dark:border-gray-500'>
            <img src={assets.person_icon} className='w-5 opacity-70' alt="" />
            <input name='name'
              type="text" 
              placeholder='Enter your name' 
              className='w-full text-sm outline-none bg-transparent' 
              required 
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <p className='mb-3 text-sm font-medium'>Email address</p>
          <div className='flex items-center gap-2 p-3 rounded-lg border border-gray-400 dark:border-gray-500'>
            <img src={assets.email_icon} className='w-5 opacity-70' alt="" />
            <input  name='email'
              type="email" 
              placeholder='Enter your email' 
              className='w-full text-sm outline-none bg-transparent' 
              required 
            />
          </div>
        </div>

        {/* Message Box */}
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea name='message'
            rows={10} 
            placeholder='Enter your message' 
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent' required
          />
        </div>

        {/* Submit Button */}
        <button 
          type='submit' 
          className='w-fit flex items-center gap-2 bg-primary text-white text-sm px-7 py-2 mb-6 rounded-full cursor-pointer hover:scale-105 transition-transform'
        >
          Submit 
          <img src={assets.arrow_icon} className='w-3' alt="" />
        </button>

      </form>
    </div>
  )
};

export default Contact
