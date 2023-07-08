import Link from 'next/link'
import React from 'react'
import HighlightText from '../atoms/HighlightText'
import Container from "@/components/templates/Container";
import Button from '@/components/atoms/Button';
import { HiMenuAlt3 } from "react-icons/hi"
import Logo from '../atoms/Logo';

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
    <header className='w-full z-50  text-lightslate fixed '>
      <Container className='py-7'>
        <nav className='flex justify-between items-center'>
          <Link href={"/"}>
            <Logo/>
          </Link>
          <div className='items-center hidden md:flex'>
            <ul className='flex gap-10 '>
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <Link href={item.label} className='text-sm inline-flex gap-1 hover:text-themecolor transition'>
                    <HighlightText className={''}>{`0${index}.`}</HighlightText>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button className='ml-8 text-base' >Resume</Button>
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