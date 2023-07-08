import classNames from 'classnames'
import React , {FC} from 'react'
import HighlightText from './HighlightText'

interface SectionProps{
  children: React.ReactNode,
  className?: string,
  indent? : number 
}

const Section : FC<SectionProps> & {Title: FC<TitleProps>} = ({children,className,indent}) => {
  return (
    <section className={classNames('mx-auto',className,{
      "max-w-5xl" : indent === 1,
      "max-w-4xl" : indent === 2,
      "max-w-2xl" : indent === 3,
    })}>
      {children}
    </section>
  )
}


interface TitleProps{
  children: React.ReactNode,
  className?: string,
  number : number
}

const Title : FC<TitleProps> = ({className, number, children}) => {
  return (
    <h1 className={classNames("flex  items-center after:block gap-2 after:content after:h-[1px] after:bg-lightestnavy after:flex-1",className)}>
      <HighlightText className={'text-base -ml-1 sm:text-xl lg:text-2xl'}>0{number}.</HighlightText>
      <span>{children}</span>
    </h1>
  )
};

Section.Title = Title;

export default Section