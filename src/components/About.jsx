import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from  '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt = {title}
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]'
      >
      I am a skilled Software Engineer with expertise in frameworks like Django and React. I am also a data and digital forensics analyst with expertise in cellebrite, Autopsy, magnet AXIOM, python, Tableau, …
      With the technical experiences I held for the past 3 years, I developed other kills like: creative thinking, problem solving, analytical research, empathy, and communication.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]'
      >
      The traditional educational system is outdated and doesn't prepare students for the real world. It's too focused on memorizing
      facts and figures, but not enough on critical thinking and problem-solving skills.
      I want to create an educational system that is more relevant to the needs of the 21st century workforce. I want to create a system
      that teaches students how to think critically, solve problems, and be creative.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
