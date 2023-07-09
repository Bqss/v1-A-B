"use client"
import Link from 'next/link'
import React from 'react'
import HighlightText from '../atoms/HighlightText'
import Container from "@/components/templates/Container";
import Button from '@/components/atoms/Button';
import { HiMenuAlt3 } from "react-icons/hi"
import Logo from '../atoms/Logo';
import { motion } from "framer-motion";

const navItems = [
  {
    label: "About",
    link: "/#about",
  },
  {
    label: "Experience",
    link: "/#experience",
  },
  {
    label: "Work",
    link: "/#work",
  },
  {
    label: "Contact",
    link: "/#contact",
  }
]

const Navbar = () => {
  return (
    <header className='w-full z-50  text-lightslate fixed bg-backgroundcolor/60 backdrop-blur-sm'>
      <Container className='py-4 sm:py-7'>
        <nav className='flex justify-between items-center'>
          <motion.span initial={{ opacity: 0, }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </motion.span>
          <div className='items-center hidden md:flex'>
            <ul className='flex gap-10 '>
              {navItems.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.12 , duration : 0.3}}
                  key={item.label}>
                  <Link href={item.label} className='text-sm inline-flex gap-1 hover:text-themecolor transition'>
                    <HighlightText className={''}>{`0${index}.`}</HighlightText>
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + navItems.length * 0.1 ,duration : 0.3}}>
              <Button className='ml-8 text-base' >Resume</Button>
            </motion.div>
          </div>
          <button className='block md:hidden text-themecolor' >
            <HiMenuAlt3 className='w-10 h-10' />
          </button>
        </nav>
      </Container>

    </header>
  )
}

export default Navbar