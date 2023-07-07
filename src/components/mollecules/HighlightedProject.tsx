import { highlightProject } from '@/types/type'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { FiGithub, FiShare } from 'react-icons/fi'

interface HighlightedProjectProps {
  projectData: highlightProject,
  className?: string,
}

const HighlightedProject: FC<HighlightedProjectProps> = ({ projectData, className }) => {

  const { title, description, imagePreview, links, images, tags} = projectData;
  
  return (
    <div className='relative '>
      <div className=''>
        <button title='see Project Detail ' className='before:content-[""] before:inset-0 bg-themecolor/20'>
          <Image src={imagePreview.src} alt={imagePreview.alt} />
        </button>
      </div>
      <div>
        <span>Featured Project</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className='flex'>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className='flex'>
        <a href={links.github}>
          <FiGithub />
        </a>
        <a href={links.demo}>
          <FiShare />
        </a>
      </div>
    </div>
  )
}

export default HighlightedProject