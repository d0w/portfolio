import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    
  }
  const handleSubmit = (e) => {

  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2x1'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className='text-secondary mt-4'><strong>Email: </strong><a href="mailto:derekxu.work@gmail.com">derekxu.work@gmail.com</a></p>
        <p className='text-secondary mt-4'><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/xuderek04/" className='cursor-pointer'>https://www.linkedin.com/in/xuderek04/</a></p>

        {/* <form ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Enter your name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-log outlined-none
                border-none font-medium'>

                </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-log outlined-none
                border-none font-medium'>

                </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows='7' name="message" value={form.message} onChange={handleChange} placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-log outlined-none
                border-none font-medium'>

                </textarea>
          </label>

          <button type="submit" disabled
            className='bg-tertiary py-3 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
              { loading ? "Sending..." : "Send (Under construction)"}
            </button>
      </form> */}
      </motion.div>
      {/* <motion.div
        variants={slideIn('right', "tween", 0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'> 
        <EarthCanvas/>
        
      </motion.div> */}
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact");