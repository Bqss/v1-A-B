import React, { FC } from 'react'

interface ContainerProps {
  children: React.ReactNode,
  className?: string
}

const Container :FC<ContainerProps>= ({className, children}) => {
  return (
    <div className={`max-w-[120rem] w-[95%] mx-auto ${className}`}>{children}</div>
  )
}

Container.defaultProps = {
  className: ''
}

export default Container