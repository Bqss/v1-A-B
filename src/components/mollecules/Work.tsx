
import React, { FC } from 'react'
import List from '../atoms/List'
import Link from 'next/link'
import { work } from '@/types/type'
import classNames from 'classnames'

interface WorkProps {
  workData: work,
  className?: string
}

const Work: FC<WorkProps> = ({ workData, className }) => {
  return (
    <>
      <h5>{workData.title} {workData.website ? <Link target='_blank' href={workData.website} className='text-themecolor hover:underline transition-all'>{'@'+workData.instanceName}</Link> : ""}</h5>
      <div className={classNames('mt-1 sm:mt-3 font-fira text-slate text-xs sm:text-sm')}>
        <time>{workData.date.start}</time>
        <span> - </span>
        <time>{workData.date.end || "Present"}</time>
      </div>
      <ul className='mt-5 space-y-3 text-lightestslate text-sm'>
        {workData.description.map((desc, i) => <List key={i}>{desc}</List>)}
      </ul>
    </>
  )
}

export default Work