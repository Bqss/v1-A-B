import { socmeds } from '@/data'
import Link from 'next/link'
import React from 'react'
import {FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiFacebook} from "react-icons/fi"

const SocmedSide = () => {
  return (
    <div className='fixed bottom-0 left-5 md:left-10 text-white'>
      <ul className='flex flex-col gap-2 items-center after:content-[""] after:block after:w-[1px] after:h-40 after:bg-white after:mt-5'>
        {socmeds.map((socmed, index) => (
          <li key={index}>
            <Link href={socmed.url} className='p-2 inline-block rounded-full hover:text-themecolor'>
              <socmed.icon className='w-5 h-5'></socmed.icon>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocmedSide