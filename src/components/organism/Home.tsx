'use client'
import React from 'react'
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import Section from '../atoms/Section'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Section className=" min-h-screen flex flex-col gap-2 sm:gap-4 justify-center items-start">
      <motion.span className="font-thin text-sm sm:text-base font-fira text-themecolor"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.3 }}>Hii, my name is</motion.span>
      <Heading delay={1.5} size={1}>Ahmad Basofi</Heading>
      <Heading className='leading-snug' delay={1.6} size={1}>I build things for the website.</Heading>
      <motion.p className="max-w-xl text-sm leading-relaxed mt-4 "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.3 }} >I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</motion.p>
      <Button className="mt-5" padding="lg" fontSize="lg" isAnimate delay={1.8}>Check out my Work!</Button>
    </Section>
  )
}

export default Home