"use client"
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const EmailSide = () => {
  return (
    < motion.div className='fixed hidden md:block right-5 md:right-10 bottom-0  text-white'
    initial ={{opacity : 0 }}
    animate ={{opacity : 1 }}
    transition ={{delay : 2.5 }}
    >
      <Link href={""} className=' hover:text-themecolor transition gap-6 after:content-[""] after:block after:w-[1px] after:h-36 after:bg-white inline-flex flex-col items-center '>
        <span className='text-sm writing-vertical'>basofi.cucokmeong12@gmail.com</span>
      </Link>
    </motion.div>
  )
}

export default EmailSide