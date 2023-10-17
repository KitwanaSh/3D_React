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
        I am a skilled frontend developer with expertise in JavaScript and React.
        I am also a data analyst with expertise in python, jupyter notebook, Tableau, SQL, flourish,... I am also skilled
        in softkils like: creative thinking, problem solving and developement. Let's work together to bring you ideas
        to life.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]'
      >
      We were taught from a young age to follow a certain path: go to school, get a good job, get a loan, buy a house, and have kids.
      And then we put our kids through the same system.
      I'm breaking the circle of the traditional educational system by becoming an entrepreneur. I'm not interested in following the path
      that's been laid out for me. I want to create my own path and solve the problems that modern education has.
      The traditional educational system is outdated and doesn't prepare students for the real world. It's too focused on memorizing
      facts and figures, and not enough on critical thinking and problem-solving skills.
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
