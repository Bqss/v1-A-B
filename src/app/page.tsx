import About from "@/components/organism/About";
import Contact from "@/components/organism/Contact";
import Experience from "@/components/organism/Experience";
import Home from "@/components/organism/Home";
import Works from "@/components/organism/Works";
import { Metadata } from "next";
import { socmeds } from '@/data'
import Link from 'next/link'

export const metadata : Metadata = {
  title : "Basofi.V1",
  description : "Basofi's Portfolio",
};

const Page = () => {

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24">
      <Home />
      <About />
      <Experience />
      <Works />
      <Contact />
      <section className="md:hidden">
        <ul className='flex justify-center gap-2 items-center '>
          {socmeds.map((socmed, index) => (
            <li key={index}>
              <Link href={socmed.url} className='p-2 inline-block rounded-full hover:text-themecolor'>
                <socmed.icon className='w-5 h-5'></socmed.icon>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Page;