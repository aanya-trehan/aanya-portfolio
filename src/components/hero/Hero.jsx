import React from 'react'
import "./hero.scss"
import { motion, transform } from 'framer-motion'

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
  x:0,
  opacity:1,
  transition:{
    duration:1,
    staggerChildren:0.1,
  },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
      repeatType:"mirror"
    }
  }
}

const sliderVariants={
  initial:{
    x:0,
  },
  animate:{
  x:"-220%",
  transition:{
    repeat:Infinity,
    duration:20,
  },
  },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>AANYA TREHAN</motion.h2>
        <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
        <motion.div variants={textVariants} className="buttons">
          <motion.button variants={textVariants}>See my Latest work</motion.button>
          <motion.button variants={textVariants}>Contact Me</motion.button>
        </motion.div>
        <motion.img variants={textVariants} src="/scroll.png" animate="scrollButton" alt="" />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Learner Dreamer Hardworking Creator 
      </motion.div>
        <div className='imageContainer'>
            <img src="/aanya.png" alt="" />
        </div>
      Hero
    </div>
  )
}

export default Hero
