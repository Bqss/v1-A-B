import classNames from 'classnames'
import React, { FC, forwardRef, ForwardRefExoticComponent } from 'react'
import HighlightText from './HighlightText'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode,
  className?: string,
  indent?: number,
  isAnimate?: boolean
}

const Section: FC<SectionProps> & { Title: any } = ({ children, className, indent, isAnimate = false }) => {
  return (
    <motion.section
      {...(isAnimate && {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6 },
        variants: {
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }
      })}
      className={classNames('mx-auto', className, {
        "max-w-5xl": indent === 1,
        "max-w-4xl": indent === 2,
        "max-w-2xl": indent === 3,
      })}>
      {children}
    </motion.section>
  )
}


interface TitleProps {
  children: React.ReactNode,
  className?: string,
  number: number
}

const Title = forwardRef<any, TitleProps>(function Title({ className, number, children }, ref) {
  return (
    <h1 className={classNames("flex  items-center after:block gap-2 after:content after:h-[1px] after:bg-lightestnavy after:flex-1", className)} ref={ref}>
      <HighlightText className={'text-base -ml-1 sm:text-xl lg:text-2xl'}>0{number}.</HighlightText>
      <span>{children}</span>
    </h1>
  )
});

Section.Title = motion(Title, { forwardMotionProps: true });

export default Section