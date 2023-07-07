import Link from 'next/link'
import React from 'react'
import HighlightText from '../atoms/HighlightText'
import Container from "@/components/templates/Container";
import Button from '@/components/atoms/Button';

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
    <header className='w-full py-10  text-lightslate fixed '>
      <Container>
        <nav className='flex justify-between'>
          <Link href={"/"} className='text-3xl font-bold text-themecolor'>A | B</Link>
          <div className='flex items-center'>
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
        </nav>
      </Container>

    </header>
  )
}

export default Navbar