'use client'
import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion';

type baseSize = "sm" | "md" | "lg"



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: baseSize,
  padding?: baseSize,
  isAnimate?: boolean,
  delay?: number,
}

const Button: FC<ButtonProps> = ({ className = "", children, fontSize = "sm", padding = "sm", delay = 0 , isAnimate }) => {

  return (
    <motion.div
      {...( isAnimate ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: delay, duration: 0.3 } } : {})}
      className={classNames('bg-themecolor group rounded-lg', className)}>
      <button className={classNames(' rounded-md bg-backgroundcolor transition-all duration-[250ms] hover:-translate-x-1 hover:-translate-y-1 text-themecolor border border-themecolor ', {
        "px-5 py-2 sm:px-5 sm:py-2 lg:px-5  lg:py-2": padding === "sm",
        "px-8 py-3 sm:px-10 sm:py-3 lg:px-12  lg:py-4": padding === "md",
        "px-7 py-3 sm:px-10 sm:py-3 lg:px-12  lg:py-4": padding === "lg",
      }, {
        "text-xs sm:text-sm ": fontSize === "sm",
        "text-sm sm:text-base ": fontSize === "md",
        "text-base sm:text-lg ": fontSize === "lg",
      })}>{children}</button>
    </motion.div>
  )
}


export default Button