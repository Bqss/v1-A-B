'use client'
import React from 'react'
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import Section from '../atoms/Section'

const Home = () => {
  return (
    <Section className=" min-h-screen flex flex-col gap-2 sm:gap-4 justify-center items-start">
      <span className="font-thin text-sm sm:text-base font-fira text-themecolor">Hii, my name is</span>
      <Heading className='' size={2}>Ahmad Basofi</Heading>
      <Heading className='leading-snug' size={2}>I build things for the website.</Heading>
      <p className="max-w-xl text-sm leading-relaxed mt-4 ">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
      <Button className="mt-5" padding="lg" fontSize="lg">Check out my Work!</Button>
    </Section>
  )
}

export default Home