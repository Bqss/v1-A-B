import React from 'react'
import cc from '@/util'


const Footer = () => {
  return (
    <footer className='w-full py-4' >
      <div className={cc('w-full flex flex-col gap-1 items-center text-xs ')}>
        <span className="">© 2023 • Made by Basofi with 💖</span>
        <span className="">Malang, East Java</span>
      </div>
    </footer>
  )
}

export default Footer