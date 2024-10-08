import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { ieee } from '../assets'
import { useEffect, useState } from 'react'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // use for detecting on mobile or not
    const mediaQuery = window.matchMedia('(max-width:550px');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    // Event listeners
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);
    
      return () => {
        mediaQuery.removeEventListener('change', 
          handleMediaQueryChange);
      }
  }, [])
  return(
    <motion.div
      variants={fadeIn("up","spring",index*0.5, 0.75)}
    >

      { isMobile? <div
        className="bg-tertiary p-5 rounded-2xl
          sm:w-[360px] w-full"
      >
        {/* Image */}
        <div className='relative w-full h-[230px]'>
          <a href={source_code_link}>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          </a>
        </div>

        {/* github logo
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div onClick={() => window.open(source_code_link,"_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img src={name==="SV-Learn"?ieee:github} alt="github" className='w-1/2 h-1/2 object-contain'/>
          </div>
        </div> */}

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              &#x2022;{tag.name}
            </p>
          ))}
        </div>
      </div>
      
      :
      
      // <Tilt 
      //   options={{
      //     max:45,
      //     scale:1,
      //     speed:450
      //   }} 
      //   className="bg-tertiary p-5 rounded-2xl
      //     sm:w-[360px] w-full"
        
      // >
      <div 
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:cursor-pointer hover:transform hover:scale-105 transition duration-200 ease-in-out"
        onClick={() => window.open(source_code_link,"_blank")}
        >
        {/* Image */}
        <div className='relative w-full h-[230px]'>
          <div onClick={() => window.open(source_code_link,"_blank")} className='cursor-pointer'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          </div>
        </div>

        {/* github logo */}
        {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div onClick={() => window.open(source_code_link,"_blank")}
            className='green-pink-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img src={name==="SV-Learn"?ieee:github} alt="github" className='w-3/4 h-3/4 object-contain'/>
          </div>
        </div> */}

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              &#x2022;{tag.name}
            </p>
          ))}
        </div>
      {/* </Tilt>} */}
      </div>
      }
      
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>
        Projects
      </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-[17px]
          max-w-3xl leading-[30px]'
        >

          Lots of coding was done here...
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index) => (
          <ProjectCard index={index} key={`project-${index}`}
            {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");