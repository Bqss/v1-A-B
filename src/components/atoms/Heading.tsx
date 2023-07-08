import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode,
  className?: string,
  size? : 1 | 2 | 3 | 4 | 5 | 6,
}

const Heading:FC<HeadingProps>  = ({children, className,  size =1}) => {

  return <span className={classNames(className,{
    "text-4xl sm:text-5xl md:text-6xl " : size ===1,
    "text-3xl sm:text-4xl md:text-5xl " : size ===2,
    "text-2xl sm:text-3xl md:text-4xl " : size ===3,
    "text-xl sm:text-2xl md:text-3xl " : size ===4,
    "text-lg sm:text-xl md:text-2xl " : size ===5,
    "text-base sm:text-lg md:text-xl " : size ===6,
  },'font-bold ')}>{children}</span>
}

export default Heading