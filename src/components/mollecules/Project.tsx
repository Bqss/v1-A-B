'use client'
import { project } from '@/types/type'
import cc from "@/util"
import Link from 'next/link';
import React, { FC } from 'react'
import {AiOutlineFolder} from "react-icons/ai";
import { FiGithub,FiShare } from 'react-icons/fi';



interface ProjectProps {
  className?: string,
  projectData : project
}

const Project : FC<ProjectProps>= ({projectData}) => {
  const {title,description,tags,links} = projectData;
  return (
    <div className='p-6 rounded-lg shadow-md shadow-navyshadow bg-[#2e194a] transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
      <div className="flex justify-between items-center">
        <span><AiOutlineFolder className='w-10 h-10 text-themecolor'/></span>
        <div className='space-x-4 flex'>
          <Link href={links.github}>
            <FiGithub className='w-5 h-5'/>
          </Link>
          <Link href={links.demo}>
            <FiShare className='w-5 h-5'/>
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <span className='text-xl font-bold'>{title}</span>
        <p className='mt-3 text-sm text-lightslate'>{description}</p>
        <div className={cc("flex gap-3 mt-7 font-fira flex-wrap gap-y-1")}>
          {tags.map((tag,index) => (<span className={cc( 'text-xs text-lightestslate')} key={index}>{tag}</span>))}
        </div>
      </div>
    </div>
  )
}

export default Project