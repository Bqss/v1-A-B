"use client"
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import Section from '../atoms/Section'

const Contact = () => {
  return (
    <Section className="pb-32 sm:py-44 flex flex-col items-center" indent={3} isAnimate={true} >
      <Section.Title number={4}>What&apos; Next?</Section.Title>
      <Heading size={1} className='mt-3'>Get In Touch</Heading>
      <p className="text-center mt-8">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      <Button padding="lg" fontSize="lg" className="mt-10" >Contact me</Button>
    </Section>
  )
}

export default Contact