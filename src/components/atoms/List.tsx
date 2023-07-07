import cc from '@/util'
import React, { FC, ReactNode } from 'react'

interface ListProps {
  children: ReactNode,
  className?: string
} 

const List : FC<ListProps>= ({children,className=''}) => {
  return (
    <li className={cc(className,"relative before:content-['▹'] before:absolute before:left-0 before:text-themecolor pl-4")}>
      {children}
    </li>
  )
}

export default List