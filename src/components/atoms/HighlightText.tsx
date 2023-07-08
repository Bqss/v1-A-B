import { FC, ReactNode } from 'react'

interface HighlightTextProps {
  children: ReactNode,
  className?: String
}

const HighlightText :FC<HighlightTextProps> = ({children, className}) => {
  return (
    <span className={`${className} text-themecolor font-fira`}>{children}</span>
  )
}

HighlightText.defaultProps = {
  className: ''
}
export default  HighlightText