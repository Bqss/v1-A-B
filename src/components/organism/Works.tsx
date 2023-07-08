'use client'
import React from 'react'
import { projects } from '@/data'
import HighlightedProject from '../mollecules/HighlightedProject'
import HighlightText from '../atoms/HighlightText'
import Project from '../mollecules/Project'
import Button from '../atoms/Button'
import cc from '@/util'
import Section from '../atoms/Section'


const Works = () => {

  return (
    <>
      <Section className="py-12 sm:py-44 ">
        <Section.Title number={3} >Somethings I&apos;ve Built</Section.Title>
        <ul className="flex flex-col mt-12  sm:mt-36  gap-10 sm:gap-20">
          {projects.filter(project => project.isHighlight).map((project, _i) => (<HighlightedProject isReverse={_i % 2 == 0} key={_i} projectData={project} />))}
        </ul>
      </Section>
      <section className="py-40 flex flex-col items-center ">
        <h3>Other Noteworthy Projects</h3>
        <HighlightText className={"mt-2 sm:mt-3 text-sm"}>View the archive</HighlightText>
        <div className={cc("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-5")}>
          {projects.filter(project => !project.isHighlight).map((project, _i) => (<Project key={_i} projectData={project} />))}
        </div>
        <Button className="mt-7">Load More</Button>
      </section>
    </>
  )
}

export default Works