import React, { FC } from 'react'
import List from '../atoms/List'
import Link from 'next/link'
import { work } from '@/types/type'


interface WorkProps {
  workData: work,
  className?: string
}

const Work: FC<WorkProps> = ({ workData, className }) => {
  return (
    <>
      <h2 className='text-2xl font-bold'>{workData.title} {workData.website ? <Link target='_blank' href={workData.website} className='text-themecolor hover:underline transition-all'>{'@'+workData.instanceName}</Link> : ""}</h2>
      <div className='mt-3 text-slate text-sm'>
        <time>{workData.date.start}</time>
        <span> - </span>
        <time>{workData.date.start || "Present"}</time>
      </div>
      <ul className='mt-5 space-y-3'>
        {workData.description.map((desc, i) => <List key={i}>{desc}</List>)}
      </ul>
    </>
  )
}

export default Work