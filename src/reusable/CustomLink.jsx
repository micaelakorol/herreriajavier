import React, { Children } from 'react'

const CustomLink = ({href, className,children,rel, onClick}) => {
  return (
   <a href={href} target='_blank' className={className} rel={rel} onClick={onClick}>{children}</a>
  )
}

export default CustomLink