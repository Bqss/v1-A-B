
import List from '../atoms/List'
import Image from 'next/image'
import Section from '../atoms/Section'
import { mySkils } from '@/data'

const About = () => {
  return (
    <Section className="text-lg " indent={1}>
      <Section.Title number={1}>About Me</Section.Title>
      <div className='flex flex-col md:flex-row-reverse  gap-3 lg:gap-10'>
        <div className="relative w-8/12 max-w-[14rem] mx-auto sm:basis-4/12 group shrink-0 mt-10 sm:mt-16 ">
          <div aria-hidden="true" className="absolute z-[3] inset-x-0 aspect-square transiton-all  rounded-full group-hover:-translate-x-3 group-hover:-translate-y-2 bg-themecolor opacity-20 group-hover:opacity-0  duration-500  "></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/pp.jpg" className=" w-full  aspect-square  rounded-full  
          group-hover:-translate-x-3 group-hover:-translate-y-2 transiton-all duration-500" alt="pp" />
          <div aria-hidden="true" className='absolute w-full  left-3 z-[-1] top-4 transiton-all duration-500  aspect-square group-hover:top-6 group:hover:left-5 border-2 border-themecolor rounded-full'></div>
        </div>
        <div className="flex flex-col gap-3 mt-10 text-sm sm:text-base  text-lightestslate">
          <p>Hello!  My name is Ahmad Basofi and I enjoy creating things that live on the internet. My interest in web development started on 2022 , when I reached my 2nd semester as Informatics College Student. </p>
          <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
          <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-y-2 relative mt-5 sm:mt-3 text-lightestslate text-xs sm:text-sm ">
            {mySkils.map((skill, _i) => <List key={_i}>{skill}</List>)}
          </ul>
        </div>
      </div>

    </Section>
  )
}

export default About