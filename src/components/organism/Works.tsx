'use client'
import React from 'react'
import { projects } from '@/data'
import { motion } from 'framer-motion'
import HighlightedProject from '../mollecules/HighlightedProject'
import HighlightText from '../atoms/HighlightText'
import Project from '../mollecules/Project'
import Button from '../atoms/Button'
import cc from '@/util'
import Section from '../atoms/Section'


const Works = () => {

  return (
    <>
      <Section className="py-12 sm:py-44 " >
        <Section.Title
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }} number={3} >Somethings I&apos;ve Built</Section.Title>
        <ul className="flex flex-col mt-12  sm:mt-36  gap-10 sm:gap-40">
          {projects.filter(project => project.isHighlight).map((project, _i) => (
            <HighlightedProject
              isReverse={_i % 2 == 0}
              key={_i}
              projectData={project}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
              }} />
          ))}
        </ul>
      </Section>
      <section className="py-40 flex flex-col items-center ">
        <motion.div
          className='text-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }} >
          <h3>Other Noteworthy Projects</h3 >
          <HighlightText className={"mt-2 sm:mt-4 text-sm"}>View the archive</HighlightText>
        </motion.div>
        <div className={cc("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-5")}>
          {projects.filter(project => !project.isHighlight).map((project, _i) => (
            <motion.div key={_i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, delay : 0.1 * _i }}
              variants={{
                visible: { opacity: 1, y: 0 , scale : 1 },
                hidden: { opacity: 0, y: 20, scale : 0.9 }
              }} >
              <Project projectData={project} />
            </motion.div>
          ))}
        </div>
        <Button  className="mt-7">Load More</Button>
      </section>
    </>
  )
}

export default Works