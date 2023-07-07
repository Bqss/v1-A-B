import cc from '@/util'
import React, { FC, ReactNode } from 'react'

type baseSize = "sm" | "md" | "lg" 

const padding: Record<baseSize, Array<number>> = {
  sm: [5,2],
  md: [8,3],
  lg: [12,4],
  
}

const fontsize : Record<baseSize, string|number> = {
  sm: 'base',
  md: 'lg',
  lg: 'xl',
}

const gbc = (pd: baseSize, fs: baseSize) =>{
  return `px-${padding[pd][0]} py-${padding[pd][1]}  text-${fontsize[fs]}`
}


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: baseSize,
  padding?: baseSize,
}

const Button: FC<ButtonProps> = ({ className="", children, fontSize ="sm", padding ="sm"}) => {
  return (
    <div className={cc('bg-themecolor group rounded-lg', className)}>
      <button className={cc(' rounded-md bg-backgroundcolor transition-all duration-[250ms] hover:-translate-x-1 hover:-translate-y-1 text-themecolor border border-themecolor ',gbc(padding, fontSize))}>{children}</button>
    </div>
  )
}


export default Button