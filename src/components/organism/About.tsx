"use client"
import List from '../atoms/List'
import Section from '../atoms/Section'
import { mySkils } from '@/data'

const About = () => {
  return (
    <Section className="text-lg md:py-56" indent={1} isAnimate={true}>
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
          <p>Fast-forward to today, and I’ve part of MACROMA BUDDIES (my college friend&apos;s  startup ) that engaged on game , tourism , and ornamental fish , and join some competition about startup and proggramming event </p>
          <p>I&apos;ve also doin some freelance on my university as practicum assistance and also doin freelance on PSHT Terate Blitas as full stack developer </p>
          <p>As college i&apos;m also active on one Organization that was HMPSTI , and now i&apos;m as Head of interest and talent Division. My hobby is playing game and some sports like football , volley and table tennis  </p>

          <p>And there is some technologies that i&apos;ve learn as a WEB Developer :  </p>

          <ul className="grid grid-cols-2 gap-y-2 relative mt-5 sm:mt-3 text-lightestslate text-xs sm:text-sm ">
            {mySkils.map((skill, _i) => <List key={_i}>{skill}</List>)}
          </ul>
        </div>
      </div>

    </Section>
  )
}

export default About