"use client"
import { socmeds } from '@/data'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const SocmedSide = () => {
  return (
    <motion.div className='fixed hidden md:block bottom-0 left-5 md:left-10 text-white'
    initial ={{opacity : 0 }}
    animate ={{opacity : 1 }}
    transition ={{delay : 2.5 , duration : 0.2}}
    >
      <ul className='flex flex-col gap-2 items-center after:content-[""] after:block after:w-[1px] after:h-40 after:bg-white after:mt-5'>
        {socmeds.map((socmed, index) => (
          <li key={index}>
            <Link href={socmed.url} className='p-2 inline-block rounded-full hover:text-themecolor'>
              <socmed.icon className='w-5 h-5'></socmed.icon>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SocmedSide