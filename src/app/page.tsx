'use client'

import Button from "@/components/atoms/Button";
import List from "@/components/atoms/List";
import Tabs from "@/components/mollecules/Tabs";
import Work from "@/components/mollecules/Work";
import { myRecentWork } from "@/data";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";


const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="max-w-5xl mx-auto">
      <section className="text-white min-h-screen flex flex-col gap-4 justify-center items-start">
        <span className="font-medium ">Hii, my name is</span>
        <span className="font-bold text-6xl ">Ahmad Basofi.</span>
        <span className="font-bold text-6xl ">I build things for the web.</span>
        <p className="max-w-xl mt-4 ">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
        <Button className="mt-5" padding="lg" fontSize="lg">Check out my Work!</Button>
      </section>
      <section className="w-full px-10 flex items-start py-40  gap-14">
        <div className="text-white text-lg flex flex-col gap-6">
          <h1 className="text-4xl text-white font-bold"><span className="text-themecolor text-3xl mr-2">01.</span>About Me</h1>
          <div className="space-y-4 text-lightestslate">
            <p>Hello!  My name is Ahmad Basofi and I enjoy creating things that live on the internet. My interest in web development started on 2022 , when I reached my 2nd semester as Informatics College Student. </p>
            <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
            <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-y-2 relative text-lightestslate text-sm ">
              <List>HTML</List>
              <List>CSS</List>
              <List>JavaScript (ES6+)</List>
              <List>React</List>
              <List>Node.js</List>
              <List>Express</List>
              <List>Next</List>
              <List>CodeIgniter</List>
              <List>Laravel</List>
            </ul>
          </div>
        </div>

        <div className="  relative shrink-0 mt-20 after:content-[''] after:absolute after:-z-10  after:w-full after:h-full after:border-2 after:left-5 after:top-8 after:rounded-full after:border-themecolor group hover:after:top-12 hover:after:left-8 after:transition-all after:duration-500">
          <div aria-hidden="true" className="bg absolute z-[1] rounded-full w-full h-full bg-themecolor opacity-30 group-hover:opacity-0 transition-opacity duration-500  "></div>
          <Image src="/images/pp.jpg" className="rounded-full overflow-hidden group-hover:-translate-x-3 group-hover:-translate-y-2 transiton-all duration-500" alt="pp" width={300} height={300}></Image>
        </div>

      </section>
  
      <section className="px-32 py-56">
        <h1 className="text-4xl text-white font-bold"><span className="text-themecolor text-3xl mr-2">02.</span>Where i&apos;ve Worked</h1>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} className="text-white mt-16 flex items-start gap-10 min-h-[40vh] " >
          <Tabs.List>
            {myRecentWork.map((work, _i)=>{
              return(
                <Tabs.Tab value={_i} key={_i}>
                  {work.instanceName}
                </Tabs.Tab>
              )
            })}
          </Tabs.List>
          <Tabs.Panels className="overflow-y-auto h-full max-h-[50vh] scrollbar-thin text-lightestslate text-light">
            {myRecentWork.map((work, _i)=> (
              <Tabs.Panel key={_i} value={_i}>
                <Work workData={work}/>
              </Tabs.Panel>
            ))}
          </Tabs.Panels>
        </Tabs>
      </section>
      <section className="px-32 py-56">
        <h1 className="text-4xl text-white font-bold"><span className="text-themecolor text-3xl mr-2">03.</span>Some Things I&apos;ve Built</h1>
        

      </section>
    </div>
  )
}

export default Home;