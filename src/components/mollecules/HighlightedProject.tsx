import { project } from '@/types/type'
import cc from '@/util'
import { motion } from 'framer-motion'
import React, { FC, forwardRef } from 'react'
import { FiGithub, FiShare } from 'react-icons/fi'

interface HighlightedProjectProps {
  projectData: project,
  className?: string,
  isReverse?: boolean
}

const HighlightedProject = forwardRef<any, HighlightedProjectProps>( function HighlightedProject({ projectData, className, isReverse = false }, ref) {

  const { title, description, imagePreview, links, images, tags } = projectData;

  return (
    <div className='relative p-8 rounded-lg shadow-sm shadow-themecolor/50 sm:shadow-none sm:px-0 sm:py-0 grid grid-cols-12  items-center ' ref={ref}>
      <div className={cc(' absolute sm:relative z-[0] inset-0 col-span-12 opacity-30 sm:opacity-100', (isReverse ? 'sm:col-start-[-1] sm:col-end-6' : 'sm:col-start-1 sm:col-end-8'))}>
        <button title='see Project Detail ' className=' before:absolute before:block pointer-auto before:content-[""] before:z-[1] before:inset-0 before:bg-themecolor/20 before:opacity-100 before:hover:opacity-0 before:transition-opacity before:duration-500 shadow-xl shadow-navyshadow/50 '>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imagePreview.src} alt={imagePreview.alt} className='w-full h-full'></img>
        </button>
      </div>
      <div className={cc(" sm:absolute grid z-[2] col-span-12 text-white", (isReverse ? 'sm:col-start-1 sm:col-end-7 text-left' : 'sm:col-start-7 sm:col-end-[-1] sm:text-right'))}>
        <span className='text-sm text-themecolor font-fira'>Featured Project</span>
        <h4>{title}</h4>
        <p className=' sm:p-4 sm:px-8  sm:bg-lightestnavy mt-6 shadow-md shadow-navyshadow/50'>{description}</p>
        <ul className={cc(' flex gap-y-1 font-fira gap-2 mt-4 text-xs text-lightestslate flex-wrap', (!isReverse ? 'sm:justify-end' : ''))}>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className={cc('flex mt-7 sm:mt-5 gap-5 ', (!isReverse ? 'sm:justify-end' : ''))}>
          <a href={links.github} className=' hover:text-themecolor transition'>
            <FiGithub className='w-5 h-5' />
          </a>
          <a href={links.demo} className=' hover:text-themecolor transition'>
            <FiShare className='w-5 h-5' />
          </a>
        </div>
      </div>

    </div>
  )
})

export default motion(HighlightedProject, {forwardMotionProps: true})