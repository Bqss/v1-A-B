'use client'
import  { useState } from 'react'
import Tabs from '../mollecules/Tabs';
import { myRecentWork } from '@/data';
import Work from '../mollecules/Work';
import Section from '../atoms/Section';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <Section className="py-20 sm:py-56 " indent={3}>
      <Section.Title number={2}>Where i&apos;ve Worked</Section.Title>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} className=" mt-10 mt:16   " >
        <Tabs.List>
          {myRecentWork.map((work, _i) => {
            return (
              <Tabs.Tab value={_i} key={_i}>
                {work.instanceName}
              </Tabs.Tab>
            )
          })}
        </Tabs.List>
        <Tabs.Panels className="overflow-y-auto h-[60vh]  scrollbar_hidden text-lightestslate text-light">
          {myRecentWork.map((work, _i) => (
            <Tabs.Panel key={_i} value={_i}>
              <Work workData={work} />
            </Tabs.Panel>
          ))}
        </Tabs.Panels>
      </Tabs>
    </Section>
  )
}

export default Experience