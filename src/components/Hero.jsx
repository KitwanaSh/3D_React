import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute top-[154px] inset-0 mx-w-7xl flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff]'>Ezechiel</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I develop user interfaces, data <br className='sm:block hidden' /> visualizations and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero